<template>
  <div
    class="q-ma-md q-mx-auto flex flex-center cart-item"
    style="max-width: 1140px"
  >
    <q-img
      style="width: 130px; height: 200px"
      alt="Picture"
      :src="require(`../assets/images/` + item.product.img)"
    />
    <div>
      <p style="max-width: 179px">{{ item.product.description }}</p>
    </div>
    <p class="q-my-auto">{{ item.product.color }}</p>
    <p class="q-my-auto">{{ item.product.size }}</p>
    <div class="flex justify-center column" style="width: 132px; height: 52px">
      <q-btn style="width: 9px" flat @click="increment(units)" label="+" />
      <input
        v-model="units"
        class="text-center no-border"
        style="max-width: 40px"
      />
      <q-btn flat @click="decrement()" label="-" />
    </div>
    <p class="q-my-auto">${{ item.product.price * units }}</p>
    <q-btn @click="deleteFromCart(index)" flat icon="delete" />
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
  setup(context) {
    const units = ref(1);
    const increment = () => {
      units.value++;
    };
    const decrement = () => {
      if (units.value > 0) {
        units.value--;
        if (units.value === 0) {
          context.emit("deleteFromCart", index);
        }
      }
    };
    const deleteFromCart = (index) => {
      context.emit("deleteFromCart", index);
    };
    return { units, increment, decrement, deleteFromCart };
  },
});
</script>


<style lang="scss">
.cart-item {
  // gap: 100px;
  justify-content: space-around;
}
</style>