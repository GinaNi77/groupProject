<template>
  <div class="q-ma-md flex flex-center cart-item">
    <q-img
      style="width: 130px; height: 200px"
      alt="Picture"
      :src="require('../assets/images/' + cart.image)"
    />
    <div>
      <p>{{ cart.description }}</p>
      <p>{{ cart.ref }}</p>
    </div>
    <p>{{ cart.colour }}</p>
    <q-select
      filled
      v-model="sizeBtn"
      :options="options"
      label="Size"
      style="width: 110px; height: 52px"
    />
    <div class="flex">
      <q-btn flat @click="increment()" label="+" />
      <input
        v-model="cart.units"
        class="text-center no-border"
        style="width: 132px; height: 52px"
      />
      <q-btn flat @click="decrement()" label="-" />
    </div>
    <p>${{ cart.amount }}</p>
    <q-btn @click="deleteFromCart(index)" flat icon="delete" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CartItem",
  props: {
    cart: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      sizeBtn: ref(null),
      options: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    };
  },
  methods: {
    increment() {
      this.cart.units++;
    },
    decrement() {
      if (this.cart.units > 0) {
        this.cart.units--;
      }
    },
    deleteFromCart(index) {
      this.$emit("deleteFromCart", index);
    },
  },
});
</script>


<style lang="scss">
.cart-item {
  gap: 100px;
}
</style>