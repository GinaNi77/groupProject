<template>
    <div class="text-h2">New Page</div>
    <div>{{productId}}</div>
    <div v-for="product in products" :key="product.id">
        <div>{{product.title}}</div>    
    </div>
    

    
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
         
        const productId = ref(parseInt(route.params.id))

        onUpdated(() =>{
            productId.value = (parseInt(route.params.id))
        })

        console.log(productId.value)

        const {result, error} = useQuery(gql`
        query MyQuery ($id: Int){
          products (where: {id: {_eq: $id}}){
            id
            description
            price
            img
            title
            sex
            size
      }
      }`,   {
                id: productId.value,         
            }
    )
      const products = computed(() => result.value?.products ?? [])
        
        return{
            productId, route, products, error
        }
    },
})
</script>
