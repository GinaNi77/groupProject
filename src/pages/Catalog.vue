<template>
  <q-page class="flex flex-start q-pt-xl">
    <div class="v-catalog flex flex-start q-px-xl">
      <vCatalogItem v-for="item in items" :key="item.id" />
    </div>
    <div class="v-menu">
      <div class="v-gender q-pb-lg">
        <q-list class="text-weight-bold">
          <q-item clickable v-ripple>
            <q-item-section>Woman</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Man</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Kids</q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="v-attr q-pt-lg">
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section>Size</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" size="xs" name="add" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>Price</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" size="xs" name="add" />
            </q-item-section>
          </q-item>
        </q-list>
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
.v-gender {
  border-bottom: solid grey 1px;
}
</style>