<template>
  <q-page class="q-mx-auto" style="max-width: 1140px">
    <div class="text-h6 q-mr-xl flex flex-center" v-if="loading">
      Loading...
    </div>
    <div class="text-h6 q-mr-xl flex flex-center" v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else-if="carts">
      <div v-if="carts.length">
        <!-- <CartItem
          v-for="(item, index) in carts"
          :key="item.id"
          :carts="item"
          @deleteFromCarts="deleteFromCarts(index)"
        /> -->
        <!-- <div class="q-ma-md flex justify-end">
          <q-btn
            @click="deleteAllFromCarts"
            flat
            label="Delete all"
            icon="delete"
          />
        </div>
        <p class="text-h5 text-weight-bold text-center">
          TOTAL: ${{ totalPrice }}
        </p>
        <div class="flex flex-center q-mb-lg">
          <q-btn to="/payment" label="Checkout now" />
        </div> -->
      </div>

      <div v-if="!carts.length" class="flex absolute-center column">
        <q-icon
          class="q-mx-auto"
          name="shopping_cart"
          size="150px"
          color="primary"
        />
        <div class="text-h4 text-primary">Your cart is empty...</div>
        <q-btn class="q-ma-lg" to="/catalog" label="Back to Catalog" />
      </div>
    </div>
  </q-page>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { defineComponent, ref } from "vue";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  name: "Cart",
  components: {
    CartItem,
  },
  setup() {
    const carts = ref([]);

    const { result, loading, error, onResult } = useQuery(gql`
      query MyQuery {
        carts {
          id
          product {
            color
            description
            id
            img
            price
            size
            title
            sex
          }
          product_id
        }
      }
    `);
    onResult(() => {
      carts.value = result.value.carts;
    });
    console.log(carts);

    return { result, carts, loading, error };
  },
  // methods: {

  // удаление товара из корзины
  //   deleteFromCarts(index) {
  //     this.carts.splice(index, 1);
  //   },

  // очистка корзины
  //   deleteAllFromCarts() {
  //     this.carts.splice(0, this.carts.length);
  //   },
  // },
  // computed: {

  // общая цена корзины
  //   totalPrice() {
  //     let totalPrice = 0;
  //     for (let i = 0; i < this.carts.length; i++) {
  //       totalPrice += this.carts[i].amount * this.carts[i].units;
  //     }
  //     return totalPrice;
  //   },
  // },
});
</script>

<style>
</style>