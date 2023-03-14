<template>
  <q-page class="flex flex-start q-pt-xl">
    <div class="v-catalog flex flex-start q-px-xl">
      <vCatalogItem v-for="item in items" :key="item.id" />
    </div>
    <div class="v-menu">
      <div class="v-gender">
        <ul>
          <li>Woman</li>
          <li>Man</li>
          <li>Kids</li>
        </ul>
      </div>
      <div class="v-attr">
        <ul>
          <li>Size</li>
          <li>Price</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import vCatalogItem from "../components/v-catalog-item.vue";

const items = [
  {
    id: 1,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];
</script>

<style scoped>
.v-catalog {
  max-width: 900px;
}
.v-menu {
  max-width: 350px;
  width: 100%;
}
</style>