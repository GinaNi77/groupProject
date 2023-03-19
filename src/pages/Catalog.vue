<template>
  <q-page>
    <div class="text-h6 q-mr-xl flex flex-center" v-if="loading">
      Loading...
    </div>
    <div class="text-h6 q-mr-xl flex flex-center" v-else-if="error">
      Error: {{ error.message }}
    </div>

    <div class="flex justify-center q-mt-lg" v-else-if="products">
      <div class="v-catalog flex flex-start">
        <vCatalogItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="v-menu">
        <div class="v-gender q-pb-lg">
          <q-item tag="label" v-ripple>
            <q-radio
              v-model="gender"
              checked-icon="horizontal_rule xs"
              unchecked-icon="none"
              val="Woman"
              label="Woman"
              @click="FilterGender('F')"
              :class="{ 'text-weight-bold': gender == 'Woman' }"
          /></q-item>

          <q-item tag="label" v-ripple>
            <q-radio
              v-model="gender"
              checked-icon="horizontal_rule xs"
              unchecked-icon="none"
              val="Man"
              label="Man"
              @click="FilterGender('M')"
              :class="{ 'text-weight-bold': gender == 'Man' }"
            />
          </q-item>

          <q-item tag="label" v-ripple>
            <q-radio
              v-model="gender"
              aria-checked="text-weight-bold"
              checked-icon="horizontal_rule xs"
              unchecked-icon="none"
              val="All"
              label="All"
              @click="GetAll()"
              :class="{ 'text-weight-bold': gender == 'All' }"
            />
          </q-item>
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
  </q-page>
</template>

<script>
import vCatalogItem from "src/components/CatalogItem.vue";

import { defineComponent, ref } from "vue";
import { computed } from "vue";
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

    const flag = ref(false);

    const { result, loading, error, onResult } = useQuery(gql`
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

    const FilterGender = (sex) => {
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

    return {
      products,
      loading,
      error,
      gender: ref("All"),
      FilterGender,
      GetAll,
    };
  },
});
</script>

<style scoped>
.v-catalog {
  max-width: 830px;
}
.v-menu {
  max-width: 250px;
  width: 100%;
}
.v-gender {
  border-bottom: solid grey 1px;
}
</style>