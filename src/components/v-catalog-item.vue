<template>
  <q-card class="my-card q-mx-sm q-my-md v-catalog-item no-box-shadow no-border-radius">  
    <img :src=" require('../assets/images/' + product.img)"/>
    <q-card-section class="q-pa-xs">
      <div class="text-weight-light">{{product.description}}</div>
      <div class="text-weight-bold">{{product.price}}</div>
      <div class="text-weight-bold">{{product.title}}</div>
      <q-btn class="flat q-mt-md full-width" outline @click="loadData(product.id)">buy</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>

import { defineComponent } from 'vue'

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