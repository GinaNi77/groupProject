<template>
    <q-page class="flex justify-center q-pa-xl">
    <div class="v-product flex justify-around" v-for="product in products" :key="product.id">
      <div class="v-product-image">
        <img :src=" require('../assets/images/' + product.img)"/>
      </div>

      <div class="v-product-about q-pl-sm">
        <div class="text-weight-bold text-h3 q-mb-md">{{product.title}}</div>
        <div class="text-h6  q-mb-md"><q-icon class="q-pb-xs" name="attach_money"></q-icon>{{ product.price }}</div>

        <div class="flex justify-between items-stretch q-py-sm">
          <div class="v-product-about-block">
            <div class="text-h5 text-weight-bold text-grey-6 q-my-sm">DESCRIPTION</div>
            <div class="text-body1 q-mb-lg">{{ product.description }}</div>
          </div>

          <div class="v-product-about-block ">
            <div class="text-h5 text-weight-bold text-grey-6 q-my-sm">SUMMARY</div>
            <div class="text-body1">Color: {{product.color}}</div>
            <div class="text-body1 q-mb-lg">Sex: {{product.sex}}</div>
            <q-btn
              class="bg-black text-white"
              style="height: 56px"
              flat
              square
              stretch
              no-caps
              icon-right="add"
              label="Add to cart"
              @click="addToCart()"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default defineComponent({
    name:"product-card",

    setup() {
        const route = useRoute()
         
        const productId = ref(parseInt(route.params.id))
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
            color
      }
      }`,   {
                id: productId.value,         
            }
    )

      const products = computed(() => result.value?.products ?? [])

   

      const { mutate: addToCart } = useMutation(gql`
      mutation addProductToCart ($product_id: Int){
        insert_carts_one(object: {product_id: $product_id}) {
        id
        product_id
      }
        }`, () => ({
        variables: {
            product_id: productId.value,
         },
    }))
        
        return{
            productId, route, products, error, addToCart
        }
    }
})
</script>

<style scoped>
.v-product {
  max-width: 900px;
  width: 100%;
}
.v-product-image,
.v-product-about {
  max-width: 400px;
}
</style>
