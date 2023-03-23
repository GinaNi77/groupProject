<template>
  <q-page>
    <div class="q-my-xl">
      <div class="text-h6 q-mr-xl flex flex-center" v-if="loading">
        Loading...
      </div>
      <div class="text-h6 q-mr-xl flex flex-center" v-else-if="error">
        Error: {{ error.message }}
      </div>

      <div class="flex justify-center q-mt-lg" v-else-if="products">
        <div class="v-catalog flex flex-start">
          <vCatalogItem
            v-for="product in items"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="v-menu">
          <div class="v-gender q-pb-lg">
            <q-list>
              <q-item clickable @click="Filter('F')" dense v-ripple>
                <q-item-section class="text-weight-bold">Woman</q-item-section>
              </q-item>
              <q-item clickable @click="Filter('M')" v-ripple>
                <q-item-section>Man</q-item-section>
              </q-item>
              <q-item clickable @click="GetAll()" v-ripple>
                <q-item-section>All</q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="v-attr q-pt-lg">
            <q-list>
              <q-item clickable v-ripple>
                <q-item-section>Size</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" size="xs" name="add" />
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Price</q-item-section>
                <q-item-section avatar>
                  <q-icon color="primary" size="xs" name="add" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import vCatalogItem from "src/components/CatalogItem.vue";

import { defineComponent, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

import { getClientOptions } from "src/apollo/index.js";
import { provideApolloClient } from "@vue/apollo-composable";
import { ApolloClient } from "@apollo/client/core";

export default defineComponent({
  name: "v-catalog",

  components: {
    vCatalogItem,
  },

  setup() {
    const apolloClient = new ApolloClient(getClientOptions());
    provideApolloClient(apolloClient);
    const products = ref([]);
    const gender = ref("All");
    const windowWitdh = ref(document.documentElement.clientWidth);

    const { result, loading, error, onResult, refetch } = useQuery(gql`
      query MyQuery {
        products {
          id
          title
          price
          img
          sex
        }
      }
    `);

    onResult(() => {
      products.value = result.value.products;
    });

    const Filter = (sex) => {
      const { result, refetch, onResult } = useQuery(
        gql`
          query MyQuery($param: String) {
            products(where: { sex: { _eq: $param } }) {
              id
              img
              price
              title
              sex
              size
            }
          }
        `,
        {
          param: sex,
        }
      );

      onResult(() => {
        products.value = result.value.products;
      });

      refetch();
      return products;
    };

    const FilterSize = (size) => {
      const { result, refetch, onResult } = useQuery(
        gql`
          query MyQuery($param: String) {
            products(where: { size: { _eq: $param } }) {
              id
              img
              price
              title
              sex
              size
            }
          }
        `,
        {
          param: size,
        }
      );

      onResult(() => {
        products.value = result.value.products;
      });

      refetch();
      return products;
    };

    const FilterGenderSize = (gender, size) => {
      const { result, refetch, onResult } = useQuery(
        gql`
          query MyQuery($sizeParam: String, $sexParam: String) {
            products(
              where: {
                size: { _eq: $sizeParam }
                _and: { sex: { _eq: $sexParam } }
              }
            ) {
              id
              size
              sex
              img
              title
              price
            }
          }
        `,
        {
          sizeParam: size,
          sexParam: gender,
        }
      );

      onResult(() => {
        products.value = result.value.products;
      });

      refetch();
      return products;
    };

    const GetAll = () => {
      const { result, onResult, refetch } = useQuery(gql`
        query MyQuery {
          products {
            id
            title
            price
            img
            sex
          }
        }
      `);

      onResult(() => {
        products.value = result.value.products;
      });

      refetch();
      return products;
    };

    function ChooseSize() {
      this.$q
        .dialog({
          title: "Size",
          message: "Choose a size:",
          options: {
            type: "radio",
            inline: true,
            items: [
              { label: "XS", value: "XS" },
              { label: "S", value: "S" },
              { label: "M", value: "M" },
              { label: "L", value: "L" },
              { label: "XL", value: "XL" },
              { label: "XXL", value: "XXL" },
            ],
          },
          cancel: true,
          persistent: true,
        })
        .onOk((data) => {
          if (data) {
            gender.value != "All"
              ? FilterGenderSize(gender.value, data)
              : FilterSize(data);
          }
        });
    }

    window.addEventListener("resize", () => {
      windowWitdh.value = document.documentElement.clientWidth;
      console.log(windowWitdh.value);
    });

    return {
      products,
      loading,
      error,
      gender,
      windowWitdh,
      FilterGender,
      GetAll,
      ChooseSize,
    };
  },
});
</script>

<style scoped>
.v-catalog {
  max-width: 830px;
  width: 100%;
}
.v-menu {
  max-width: 250px;
  width: 100%;
}
.v-gender {
  border-bottom: solid grey 1px;
}
</style>