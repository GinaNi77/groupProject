<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-black"
        />


        <q-toolbar-title class="text-black uppercase">
          Menu
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

     <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="300"
        :breakpoint="500"
        class="bg-grey-1"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item to="/" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>

              <q-item-section>
                Login
              </q-item-section>
            </q-item>

            <q-item to="/catalog" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="store" />
              </q-item-section>

              <q-item-section>
                Catalog
              </q-item-section>
            </q-item>

            <q-item to="/cart" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="shopping_cart" />
              </q-item-section>

              <q-item-section>
                Cart
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-drawer>
>>>>>>> test-merge

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style scoped>
.uppercase{
  text-transform: uppercase;
  letter-spacing: 7px;
  font-size: 20px;
}
</style>
