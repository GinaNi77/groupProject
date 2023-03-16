<template>
  <q-card class="my-card q-mx-sm q-my-lg v-catalog-item no-box-shadow no-border-radius">  
    <img :src=" require('../assets/images/' + product.img)"/>
    <q-card-section class="q-pa-xs">
      <div class="text-weight-light">{{product.description}}</div>
      <div class="text-weight-bold">{{product.price}}</div>

      <q-btn class="flat q-mb-sm text-black full-width" 
        size="sm" 
        :ripple="false" 
        flat
        :to="`/product/${product.id}`">
        learn more
      </q-btn>

      <q-btn class="flat full-width" 
        outline 
        @click="loadData(product.id)">
        buy
      </q-btn>
      
    </q-card-section>
  </q-card>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent ({

  name: "v-catalog-item",

  props: {
        product:{
            type: Object,
            default() {
                return {}
            }
        }
  },

  setup() {
    const loadData = (id) => {
      console.log(id)
    }

    return {
      loadData
    }
}
})

</script>

<style>
.v-catalog-item {
  max-width: 250px;
  max-height: 464px;
}

</style>