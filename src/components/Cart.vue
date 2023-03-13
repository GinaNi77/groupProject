<template>
  <div v-if="!cart.length" class="absolute-center">
    <q-icon name="check" size="150px" color="primary" />
    <div class="text-h4 text-primary text-center">Your cart is empty...</div>
  </div>
</template>

<script>
export default {
  name: "cart",
};
</script>

<style>
</style>