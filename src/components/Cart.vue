<template>
  <p class="text-h4 text-weight-bold text-center">SHOPPING CART</p>
  <CartItem
    v-for="(item, index) in cart"
    :key="item.id"
    :cart="item"
    @deleteFromCart="deleteFromCart(index)"
  />
  <q-btn
    v-if="cart.length"
    class="q-ma-md"
    @click="deleteAllFromCart"
    flat
    label="Delete all"
    icon="delete"
  />
  <p class="text-h5 text-weight-bold text-center">TOTAL: ${{}}</p>
  <q-btn v-if="cart.length" to="/payment" class="q-my-md q-mx-auto" label="Checkout now" />
  <div v-if="!cart.length" class="flex absolute-center column">
    <q-icon name="shopping_cart" size="150px" color="primary" />
    <div class="text-h4 text-primary">Your cart is empty...</div>
    <q-btn class="q-ma-lg" to="/catalog" label="Back to Catalog" />
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Cart",
  components: {
    CartItem,
  },
  data() {
    return {
      cart: [
        {
          id: 1,
          image: "vest.svg",
          description: "WAISTCOAT WITH CONTRAST PIPING",
          colour: "Navy Blue",
          size: "",
          units: 1,
          amount: 24,
          ref: "3123/619",
        },
        {
          id: 2,
          image: "blouse.svg",
          description: "WAISTCOAT WITH CONTRAST PIPING",
          colour: "Navy Blue",
          size: "",
          units: 1,
          amount: 24,
          ref: "3123/619",
        },
        {
          id: 3,
          image: "boots.svg",
          description: "WAISTCOAT WITH CONTRAST PIPING",
          colour: "Navy Blue",
          size: "",
          units: 1,
          amount: 24,
          ref: "3123/619",
        },
        {
          id: 4,
          image: "shirt.svg",
          description: "WAISTCOAT WITH CONTRAST PIPING",
          colour: "Navy Blue",
          size: "",
          units: 1,
          amount: 24,
          ref: "3123/619",
        },
      ],
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
  // computed: {
  //   totalPrice() {
  //     let totalPrice = 0;
  //     for (let i = 0; i < this.cart.length; i++) {
  //       totalPrice += this.cart.amount[i];
  //     }
  //     return totalPrice;
  //   },
  // },
});
</script>

<style>
</style>