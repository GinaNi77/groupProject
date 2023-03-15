<template>
  <div class="q-ma-md">
    <div class="flex flex-center cart-item">
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
          v-model="counter"
          class="text-center no-border"
          style="width: 132px; height: 52px"
        />
        <q-btn flat @click="decrement()" label="-" />
      </div>
      <p>${{ cart.amount }}</p>
      <q-btn @click="deleteFromCart(index)" flat icon="delete" />
    </div>
  </div>
  <q-btn
    class="q-ma-md"
    @click="deleteAllFromCart"
    flat
    label="Delete all"
    icon="delete"
  />
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

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
  setup(props) {
    return {
      props,
      sizeBtn: ref(null),
      options: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      counter: ref(1), // counter должен менять item.units, надо вернуться сюда
      total: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    deleteFromCart(index) {
      this.$emit("deleteFromCart", index)
    },
    deleteAllFromCart() {
      this.cart.length = 0;
    },
  },
});
</script>

<style lang="scss">
.cart-item {
  gap: 100px;
}
</style>