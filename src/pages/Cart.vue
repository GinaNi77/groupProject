<template>
  <q-page class="q-mx-auto" style="max-width: 1140px">
    <div class="text-h6 q-mr-xl flex flex-center" v-if="loading">
      Loading...
    </div>
    <div class="text-h6 q-mr-xl flex flex-center" v-else-if="error">
      Error: {{ error.message }}
    </div>
    <div v-else-if="carts">
      <div v-if="carts.length">
        <!-- <CartItem
          v-for="(item, index) in items"
          :key="item.id"
          :carts="item"
          @deleteFromCarts="deleteFromCarts(index)"
        /> -->
        <div class="q-ma-md flex justify-end">
          <q-btn
            @click="deleteAllFromCarts"
            flat
            label="Delete all"
            icon="delete"
          />
        </div>
        <p class="text-h5 text-weight-bold text-center">
          TOTAL: ${{ totalPrice }}
        </p>
        <div class="flex flex-center q-mb-lg">
          <q-btn to="/payment" label="Checkout now" />
        </div>
      </div>

      <div v-if="!carts.length" class="flex absolute-center column">
        <q-icon
          class="q-mx-auto"
          name="shopping_cart"
          size="150px"
          color="primary"
        />
        <div class="text-h4 text-primary">Your cart is empty...</div>
        <q-btn class="q-ma-lg" to="/catalog" label="Back to Catalog" />
      </div>
    </div>
  </q-page>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { defineComponent, ref } from "vue";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { computed } from "vue";

export default defineComponent({
  name: "Cart",
  components: {
    CartItem,
  },
  setup() {
    const items = ref([]);

    const { result, loading, error, onResult } = useQuery(gql`
      query MyQuery {
        carts {
          id
          product_id
          product {
            color
            description
            id
            img
            price
            sex
            size
            title
          }
        }
      }
    `);
    const carts = computed(() => result.value?.carts ?? []);

    onResult(() => {
      items.value = result.value.carts;
    });
    console.log(result);

    return { result, items, carts, loading, error };
  },
  methods: {
    deleteFromCarts(index) {
      this.carts.splice(index, 1);
    },
    deleteAllFromCarts() {
      this.carts.splice(0, this.carts.length);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.carts.length; i++) {
        totalPrice += this.carts[i].amount * this.carts[i].units;
      }
      return totalPrice;
    },
  },
});
</script>

<style>
</style>