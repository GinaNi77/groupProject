<template>
  <div class="q-ma-md flex flex-center cart-item">
    <q-img
      style="width: 130px; height: 200px"
      alt="Picture"
      :src="require('../assets/images/' + cart.image)"
    />
    <div>
      <p style="max-width: 179px">{{ cart.description }}</p>
      <p style="opacity: 0.5; font-size: 10px">REF. {{ cart.ref }}</p>
    </div>
    <p>{{ cart.colour }}</p>
    <q-select
      filled
      v-model="sizeBtn"
      :options="options"
      label="Size"
      style="width: 110px; height: 52px"
    />
    <div class="flex justify-center column" style="width: 132px; height: 52px">
      <q-btn style="width: 9px" flat @click="increment()" label="+" />
      <input
        v-model="cart.units"
        class="text-center no-border"
        style="max-width: 40px"
      />
      <q-btn flat @click="decrement()" label="-" />
    </div>
    <p>${{ cart.amount * cart.units }}</p>
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
    decrement(index) {
      if (this.cart.units > 0) {
        this.cart.units--;
        if (this.cart.units === 0) {
          this.$emit("deleteFromCart", index);
        }
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