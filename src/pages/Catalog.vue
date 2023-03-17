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
          v-for="product in items"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="v-menu">
        <div class="v-gender q-pb-lg">
          <q-list>
            <q-item clickable @click="Filter()" dense v-ripple>
              <q-item-section class="text-weight-bold">Woman</q-item-section>
            </q-item>
            <q-item clickable @click="Filter('sex', 'M')" v-ripple>
              <q-item-section>Man</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Kids</q-item-section>
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
    const items = ref([]);

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
    const products = computed(() => result.value?.products ?? []);

    onResult(() => {
      console.log(products.value);
      products.value.forEach((item) => {
        items.value.push(item);
      });
    });

    // const Filter = (arg, param) => {
    //   switch (arg) {
    //     case "sex":
    //       items.value = products.value.filter((item) => item.sex == param);
    //       break;
    //     case "size":
    //       items.value = items.value.filter((item) => item.size == param);
    //       break;
    //     default:
    //       items.value = products.value;
    //   }

    //   console.log(items.value);
    //   return items;
    // };

    const Filter = () => {
      const { result, loading, error, onResult } = useQuery(gql`
        query MyQuery {
          products(where: { sex: { _eq: "F" } }) {
            id
            img
            price
            title
            sex
            size
          }
        }
      `);

      onResult(() => {
        console.log(result.value.products);
        items.value = result.value.products;
      });
    };

    return { items, products, loading, error, Filter };
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