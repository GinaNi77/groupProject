<template>
  <q-card class="my-card q-ma-sm v-catalog-item no-box-shadow no-border-radius">
    <img src="../assets/3.png" />

    <q-card-section class="q-pa-xs">
      <div class="text-weight-light">Name</div>
      <div class="text-weight-bold">24$</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {},
  data() {
    return {};
  },
};
</script>

<style>
.v-catalog-item {
  max-width: 250px;
  max-height: 464px;
}
</style>