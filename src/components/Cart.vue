<template>
  <p class="text-h4 text-weight-bold text-center">SHOPPING CART</p>
  <CartItem
    v-for="item in cart"
    :key="item.id"
    :cart="item"
    @deleteFromCart="deleteFromCart(index)"
  />
  <p class="text-h4 text-weight-bold text-center">TOTAL: ${{}}</p>
  <q-btn to="/payment" exact label="Checkout now" />
  <div v-if="(cart.length = 0)" class="absolute-center">
    <q-icon name="check" size="150px" color="primary" />
    <div class="text-h4 text-primary text-center">Your cart is empty...</div>
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
  setup() {
    const deleteFromCart = (index) => {
      cart.value = cart.value.splice(index, 1);
    };

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
      deleteFromCart,
    };
  },
});
</script>

<style>
</style>