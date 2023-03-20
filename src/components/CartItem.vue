<template>
  <div
    class="q-ma-md q-mx-auto flex flex-center cart-item"
    style="max-width: 1140px"
    v-for="item in carts"
    :key="item.id"
  >
    <q-img
      style="width: 130px; height: 200px"
      alt="Picture"
      :src="require('../assets/images/' + item.image)"
    />
    <div>
      <p style="max-width: 179px">{{ item.description }}</p>
      <p style="opacity: 0.5; font-size: 10px">REF. {{ item.ref }}</p>
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
  setup() {
    const { result, error } = useQuery(
      gql`
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
            }
            product_id
          }
        }
      `
    );

    const carts = computed(() => result.value?.carts ?? []);

    console.log(carts);

    return {
      carts,
      result,
      error,
    };
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