<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="phone"
          label="Phone"
          mask="(###) ### - ####"
          fill-mask
          hint="Mask: (###) ### - ####"
        />

        <q-input
          filled
          v-model="card"
          label="Card"
          mask="#### #### #### ####"
          fill-mask="#"
          hint="Mask: #### #### #### ####, FillMask: #"
        />
        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Payment",
  data() {
    return {
      id: ref(null),
      phone: ref(null),
      card: ref(null),
    };
  },
};
</script>

<style>
</style>