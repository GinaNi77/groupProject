<template>
  <CartItem />
  <div v-if="!cart.length" class="absolute-center">
    <q-icon name="check" size="150px" color="primary" />
    <div class="text-h4 text-primary text-center">Your cart is empty...</div>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";

export default {
  name: "Cart",
  components: {
    CartItem,
  },
  setup() {
    return {
      cart: [
        {
          id: 1,
          image: "../assets/images/vest.svg",
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
};
</script>

<style>
</style>