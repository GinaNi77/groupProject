<template>
  <!-- <q-card class="my-card q-ma-sm v-catalog-item no-box-shadow no-border-radius">
    <img src="../assets/3.png"/>
    <q-card-section class="q-pa-xs">
      <div class="text-weight-light">{{item_data.title}}</div>
      <div class="text-weight-bold">{{item_data.price}}</div>
    </q-card-section>
  </q-card> -->

<div v-if="loading" class="flex flex-center">Loading...</div>
<div v-else-if="error">Error: {{ error.message }}</div>
  <q-card v-else-if="result && result.products" class="my-card q-ma-sm v-catalog-item no-box-shadow no-border-radius" v-for="product in result.products"  :key="product.id">  
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
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { watch } from 'vue'

export default defineComponent ({


//   name: "v-catalog-item",
//   props: {
//         item_data:{
//             type: Object,
//             default() {
//                 return {}
//             }
//         }
//   },
  


  setup() {
    const {result, loading, error} = useQuery(gql`
        query MyQuery {
          products {
            id
            description
            price
            img
            title
      }
      }`)

      // const {result, loading, error} = useQuery(gql`
      //   query MyQuery {
      //   products(where: {sex: {_eq: "F"}}) {
      //     id
      //     title
      //     img
      //     description
      //     price

      //   }
      // }`)

    return { result, loading, error};
  }
})

</script>

<style>
.v-catalog-item {
  max-width: 250px;
  max-height: 464px;
}

</style>