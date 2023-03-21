<template>
  <div
    class="q-ma-md q-mx-auto flex flex-center cart-item"
    style="max-width: 1140px"
    v-for="item in item"
    :key="item.id"
  >
    <div>
      <p style="max-width: 179px">{{ item.description }}</p>
    </div>
    <p class="q-my-auto">{{ item.color }}</p>
    <p class="q-my-auto">{{ item.size }}</p>
    <!-- <div class="flex justify-center column" style="width: 132px; height: 52px">
      <q-btn style="width: 9px" flat @click="increment()" label="+" />
      <input
        v-model="carts.units"
        class="text-center no-border"
        style="max-width: 40px"
      />
      <q-btn flat @click="decrement()" label="-" />
    </div> -->
    <!-- <p class="q-my-auto">${{ item.amount * item.units }}</p> -->
    <!-- <q-btn @click="deleteFromCart(index)" flat icon="delete" /> -->
  </div>
</template>

<script>
import { defineComponent, ref, onUpdated } from "vue";
import { computed } from "vue";
import { useQuery } from "@vue/apollo-composable";

import gql from "graphql-tag";

export default defineComponent({
  name: "CartItem",
  props: {
    item: {
      type: Object,
    },
  },
  // methods: {

  // изменение количества товара
  //   increment() {
  //     this.cart.units++;
  //   },
  //   decrement(index) {
  //     if (this.cart.units > 0) {
  //       this.cart.units--;
  //       if (this.cart.units === 0) {
  //         this.$emit("deleteFromCart", index);
  //       }
  //     }
  //   },

  // удаление из корзины
  //   deleteFromCart(index) {
  //     this.$emit("deleteFromCart", index);
  //   },
  // },
});
</script>


<style lang="scss">
.cart-item {
  // gap: 100px;
  justify-content: space-around;
}
</style>