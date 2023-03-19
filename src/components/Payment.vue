<template>
  <div class="q-pa-md absolute-center" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
        style="max-width: 200px"
      >
        <q-input filled v-model="order.name" label="Name" />
        <q-input filled v-model="order.surname" label="Surname" />
        <q-input filled v-model="order.patronymic" label="Patronymic" />
        <q-input
          filled
          v-model="order.card"
          label="Card"
          mask="#### #### #### ####"
          fill-mask="_"
        />
        <q-input
          filled
          v-model="order.date"
          label="Date"
          mask="##/####"
          fill-mask="_"
        />
        <q-input
          filled
          v-model="order.code"
          label="CVV code"
          mask="###"
          fill-mask="_"
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
      order: {
        name: "",
        surname: "",
        patronymic: "",
        date: null,
        card: null,
        code: null,
      },

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
        console.log(this.order);
      }
    },

    onReset() {
      this.date = null;
      this.card = null;
      this.code = null;
      this.accept = false;
    },
  },
};
</script>

<style>
</style>