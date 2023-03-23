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
      <q-btn style="width: 9px" flat @click="increment()" label="+" />
      <input
        v-model="units"
        class="text-center no-border"
        style="max-width: 40px"
      />
      <q-btn flat @click="decrement()" label="-" />
    </div>
    <p class="q-my-auto">${{ item.product.price * units }}</p>
    <q-btn @click="deleteFromCart(item.id)" flat icon="delete" />
  </div>
</template>

<script>
import { defineComponent, ref, onUpdated } from "vue";
import { computed } from "vue";
import { useQuery, useMutation } from "@vue/apollo-composable";

import gql from "graphql-tag";

export default defineComponent({
  name: "CartItem",
  props: {
    item: {
      type: Object,
    },
  },
  setup() {
    // const increment = () => {};

    // const { result } = useQuery(gql`
    //   query MyQuery {
    //     carts {
    //       units
    //     }
    //   }
    // `);

    const units = ref(1);
    const increment = () => {
      units.value++;
    };

    const { mutate: deleteCartItem } = useMutation(gql`
      mutation MyMutation($id: Int!) {
        delete_carts_by_pk(id: $id) {
          id
        }
      }
    `);

    const decrement = () => {
      if (units.value > 1) {
        units.value--;
      }
    };

    const deleteFromCart = async (id) => {
      const { data } = await deleteCartItem({
        id: id,
      });
      console.log(id);
    };
    return { increment, decrement, deleteCartItem, deleteFromCart, units };
  },
});
</script>


<style lang="scss">
.cart-item {
  // gap: 100px;
  justify-content: space-around;
}
</style>