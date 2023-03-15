<template>
  <q-page class="flex justify-center q-pa-xl">
    <div class="v-product flex justify-around">
      <div class="v-product-image">
        <img src="../assets/3.png" />
      </div>

      <div class="v-product-about q-pl-sm">
        <h5 class="v-product-about-name text-overline">{{ product.name }}</h5>
        <h5 class="text-weight-bold">${{ product.amount }}</h5>

        <div class="flex justify-between items-stretch q-pa-sm">
          <div class="v-product-about-block">
            <p class="v-product-about-subtitle text-overline">DESCRIPTION</p>
            <p>{{ product.description }}</p>
            <q-select square outlined :options="options" label="Choose size" />
          </div>

          <div class="v-product-about-block">
            <p class="v-product-about-subtitle text-overline">SUMMARY</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              tempore.
            </p>
            <q-btn
              color="secondary"
              style="height: 56px"
              square
              stretch
              no-caps
              icon-right="add"
              label="Add to cart"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const product = {
  id: 1,
  image: "../assets/images/vest.svg",
  name: "WAISTCOAT WITH CONTRAST PIPING",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aut.",
  colour: "Navy Blue",
  size: "",
  units: 1,
  amount: 24,
  ref: "3123/619",
};
</script>

<style scoped>
.v-product {
  max-width: 900px;
  width: 100%;
}
.v-product-image,
.v-product-about {
  max-width: 400px;
}

.v-product-about-block {
  max-width: 160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.v-product-about-subtitle {
  color: rgb(146, 144, 144);
}

.v-product-about-name {
  font-size: 20px;
}
</style>