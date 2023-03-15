<template>
  <q-page class="flex justify-center q-px-xl">
    <div class="v-catalog flex flex-start">
      <vCatalogItem v-for="product in products" :key="product.id" :product="product"/>
    </div>
    <div class="v-menu q-pl-sm">
      <div class="v-gender q-pb-lg">
        <q-list>
          <q-item clickable dense v-ripple >
            <q-item-section class="text-weight-bold">Woman</q-item-section>
          </q-item>
          <q-item clickable dense v-ripple>
            <q-item-section class="text-weight-bold">Man</q-item-section>
          </q-item>
          <q-item clickable dense v-ripple>
            <q-item-section class="text-weight-bold">Kids</q-item-section>
          </q-item>
        </q-list>
      </div>

      <div class="v-attr q-pt-lg">
        <q-list>
          <q-item clickable dense v-ripple>
            <q-item-section>Size</q-item-section>
            <q-item-section avatar>
              <q-avatar text-color="grey" size="sm" icon="add" />
            </q-item-section>
          </q-item>
          <q-item clickable dense v-ripple>
            <q-item-section>Price</q-item-section>
            <q-item-section avatar>
              <q-avatar text-color="grey" size="sm" icon="add" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import vCatalogItem from "src/components/v-catalog-item.vue";

import { defineComponent } from 'vue'
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default defineComponent ({
  name: "v-catalog-item",

  components: {
        vCatalogItem
    },

  setup() {
    const {result} = useQuery(gql`
        query MyQuery {
          products {
            id
            description
            price
            img
      }
      }`)

      const products = computed(() => result.value?.products ?? [])

    return {products};
  },
})

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
  border-bottom: solid black 1px;
}
</style>