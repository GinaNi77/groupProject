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
import { useQuasar } from "quasar";

export default {
  name: "Payment",
  data() {
    return {
      phone: ref(null),
      card: ref(null),
      accept: ref(false),
      $q: useQuasar(),
    };
  },
  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.phone = null;
      this.card = null;
      this.accept = false;
    },
  },
};
</script>

<style>
</style>