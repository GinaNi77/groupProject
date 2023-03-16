<template>
    <div class="text-h2">New Page</div>
    <div>{{productId}}</div>

    
</template>

<script>
import { defineComponent, ref, onUpdated } from 'vue'
import { useRoute } from 'vue-router'



export default defineComponent({
    name:"product-card",

    setup() {
        const route = useRoute()
         
        const productId = ref("")

        onUpdated(() =>{
            productId.value = route.params.id
        })
        
        return{
            productId, route
        }
    },
})
</script>
