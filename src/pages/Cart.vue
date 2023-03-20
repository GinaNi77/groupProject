<template>
  <q-page class="q-mx-auto" style="max-width: 1140px">
    <div class="text-h6 q-mr-xl flex flex-center" v-if="loading">
      Loading...
    </div>
    <div class="text-h6 q-mr-xl flex flex-center" v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else-if="cart">
      <div v-if="cart.length">
        <CartItem
          v-for="(item, index) in cart"
          :key="item.id"
          :cart="item"
          @deleteFromCart="deleteFromCart(index)"
        />
        <div class="q-ma-md flex justify-end">
          <q-btn
            @click="deleteAllFromCart"
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
        </div>
      </div>

      <div v-if="!cart.length" class="flex absolute-center column">
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
import { computed } from "vue";

export default defineComponent({
  name: "Cart",
  components: {
    CartItem,
  },
  setup() {
    const items = ref([]);

    const { result, loading, error, onResult } = useQuery(gql`
      query MyQuery {
        carts {
          id
          product_id
          product {
            color
            description
            id
            img
            price
            sex
            size
            title
          }
        }
      }
    `);
    const cart = computed(() => result.value?.cart ?? []);

    onResult(() => {
      items.value = result.value.cart;
    });
    console.log(result);
    console.log(cart);
    return { result, items, cart, loading, error };
  },
  data() {
    return {
      // cart: [
      //   {
      //     id: 1,
      //     image: "vest.svg",
      //     description: "WAISTCOAT WITH CONTRAST PIPING",
      //     color: "Navy Blue",
      //     size: "M",
      //     units: 1,
      //     amount: 24,
      //     ref: "3123/619",
      //   },
      //   {
      //     id: 2,
      //     image: "blouse.svg",
      //     description: "WAISTCOAT WITH CONTRAST PIPING",
      //     color: "Navy Blue",
      //     size: "M",
      //     units: 1,
      //     amount: 24,
      //     ref: "3123/619",
      //   },
      //   {
      //     id: 3,
      //     image: "boots.svg",
      //     description: "WAISTCOAT WITH CONTRAST PIPING",
      //     color: "Navy Blue",
      //     size: "XL",
      //     units: 1,
      //     amount: 24,
      //     ref: "3123/619",
      //   },
      //   {
      //     id: 4,
      //     image: "shirt.svg",
      //     description: "WAISTCOAT WITH CONTRAST PIPING",
      //     color: "Navy Blue",
      //     size: "L",
      //     units: 1,
      //     amount: 24,
      //     ref: "3123/619",
      //   },
      // ],
    };
  },
  methods: {
    deleteFromCart(index) {
      this.cart.splice(index, 1);
    },
    deleteAllFromCart() {
      this.cart.splice(0, this.cart.length);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.cart.length; i++) {
        totalPrice += this.cart[i].amount * this.cart[i].units;
      }
      return totalPrice;
    },
  },
});
</script>

<style>
</style>