<template>
    <div class="text-h2">New Page</div>
    <div>{{productId}}</div>
    <div>{{products}}</div>

    
</template>

<script>
import { defineComponent, ref, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default defineComponent({
    name:"product-card",

    setup() {
        const route = useRoute()
         
        const productId = ref("")

        onUpdated(() =>{
            productId.value = route.params.id
        })

        const {result} = useQuery(gql`
        query MyQuery($id: Int) {
          products (where: {id: {_eq: $id}}){
            id
            description
            price
            img
            title
            sex
            size
      }
      }`)
      const products = computed(() => result.value?.products ?? [])
        
        return{
            productId, route, products
        }
    },
})
</script>
