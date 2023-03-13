<template>
  <div
    v-for="item in cart"
    :key="item.id"
    class="q-ma-md flex flex-center cart-item"
  >
    <q-img
      style="width: 130px; height: 200px"
      alt="Picture"
      src="../assets/images/blouse.svg"
    />
    <div>
      <p>{{ item.description }}</p>
      <p>{{ item.ref }}</p>
    </div>

    <p>{{ item.colour }}</p>
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
    <p>${{ item.amount }}</p>
    <q-btn flat icon="delete" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "CartItem",
  setup() {
    return {
      sizeBtn: ref(null),
      options: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      counter: ref(1), // counter должен менять item.units, надо вернуться сюда
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
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
</script>

<style lang="scss">
.cart-item {
  gap: 100px;
}
</style>