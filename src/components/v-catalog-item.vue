<template>
  <q-card class="my-card q-ma-sm v-catalog-item no-box-shadow no-border-radius">  
    <img :src=" require('../assets/images/' + product.img)"/>
    <q-card-section class="q-pa-xs">
      <div class="text-weight-light">{{product.description}}</div>
      <div class="text-weight-bold">{{product.price}}</div>
      <div class="text-weight-bold">{{product.title}}</div>
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
  
    return {

    };
  }
})

</script>

<style>
.v-catalog-item {
  max-width: 250px;
  max-height: 464px;
}

</style>