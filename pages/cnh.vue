<template>
  <v-container
    class="white px-5"
    fill-height
    style="flex-direction: column"
    wrap
  >
    <img id="myImage" style="display: none" />
    <Header />
    <div class="text mt-5 mb-4">
      Queremos te conhecer melhor, tire uma foto com um documento com foto ao
      lado do seu rosto e nos envie ;)
    </div>
    <form
      v-if="fillManuallyFields"
      element-loading="loading"
      style="width: 100%;"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="cpf"
        name="cpf"
        label="CPF"
        light
        flat
        class="mb-2"
        hide-details=""
      ></v-text-field>
      <v-text-field
        v-model="rg"
        name="rg"
        label="RG"
        light
        flat
        class="mb-2"
        hide-details=""
      ></v-text-field>
      <v-text-field
        v-model="register_number_cnh"
        name="register_number_cnh"
        label="Nº Registro CNH"
        light
        flat
        class="mb-2"
        hide-details=""
      ></v-text-field>
    </form>
    <img v-else src="@/static/click-here.jpg" @click="takeAPhoto()" />
    <v-btn class="mt-5" style="width: 100%;" text @click="next()">
      {{ buttonText }}
    </v-btn>
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
      OCRSuccess: false,
      fillManuallyFields: false,
      cpf: null,
      rg: null,
      register_number_cnh: null,
      snackbar: false,
      loading: false,
    };
  },
  computed: {
    buttonText() {
      if (this.OCRSuccess || this.fillManuallyFields) {
        return 'Próximo';
      }
      return 'Não estou com minha CNH';
    },
  },
  created() {},
  methods: {
    next() {
      if (
        this.fillManuallyFields &&
        (!this.cpf || !this.rg || !this.register_number_cnh)
      ) {
        this.snackbar = true;
        return;
      } else if (this.fillManuallyFields) {
        this.loading = true;
        this.$store.dispatch('ocr/createManual', {
          cpf: this.cpf,
          rg: this.rg,
          register_number_cnh: this.register_number_cnh,
        });
        this.$router.push('/car-board');
      }
      if (this.OCRSuccess) {
        this.$router.push('/car-board');
        return;
      }
      this.fillManuallyFields = true;
    },
    takeAPhoto() {
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        destinationType: navigator.camera.DestinationType.DATA_URL,
        quality: 50,
      });
    },
    onSuccess(imagePath) {
      let base64 = 'data:image/jpeg;base64,' + imagePath;
      this.$store.dispatch('ocr/create', { base64 });
    },
    onFail(err) {
      console.log(err);
    },
  },
};
</script>

<style scoped>
.text {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 135.4%;
  color: #254473;
}
</style>
