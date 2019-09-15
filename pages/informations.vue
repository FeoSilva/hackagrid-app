<template>
  <v-container
    class="white px-5"
    fill-height
    style="flex-direction: column"
    wrap
  >
    <Header />
    <div class="text mt-5 mb-4">
      Falta pouco!
    </div>
    <form
      element-loading="loading"
      style="width: 100%;"
      @submit.prevent="next()"
    >
      <v-select
        v-model="civil_status"
        :items="items"
        class="mb-5"
        label="Estado Civil"
      ></v-select>
      <v-text-field
        v-model="zipcode_car"
        name="zipcode_car"
        label="CEP de onde seu carro dorme:"
        mask="['#####-###']"
        light
        flat
        class="mb-5"
        hide-details=""
      ></v-text-field>
      <div class="question mt-5 mb-4">
        Você é o motorista?
      </div>
      <v-radio-group v-model="main_driver">
        <v-radio value="yes" label="Sim"></v-radio>
        <v-radio value="no" label="Não"></v-radio>
      </v-radio-group>
      <v-btn
        color="#F16A34"
        class="mt-5"
        style="width: 100%;"
        text
        type="submit"
      >
        Próximo
      </v-btn>
    </form>
    <v-snackbar v-model="snackbar">
      Preencha todos os campos
      <v-btn color="red" text @click="snackbar = false">
        Fechar
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
  data() {
    return {
      snackbar: false,
      civil_status: null,
      zipcode_car: null,
      main_driver: null,
      items: [
        'Solteiro(a)',
        'Casado(a)',
        'Divorciado(a)',
        'Viúvo(a)',
        'Separado(a)',
      ],
    };
  },
  methods: {
    next() {
      if (!this.civil_status || !this.zipcode_car || !this.main_driver) {
        this.snackbar = true;
        return;
      }
      this.$router.push('/offer-detail');
    },
  },
};
</script>
<style scoped>
.text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 135.4%;
  color: #254473;
  text-align: left;
  width: 100%;
}
.question {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 135.4%;
  color: #254473;
  text-align: left;
  width: 100%;
}
</style>
