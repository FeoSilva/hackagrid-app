<template>
  <v-container
    class="white px-5"
    fill-height
    style="flex-direction: column"
    wrap
  >
    <Header />
    <div class="text mt-5 mb-4">
      Precisamos de algumas informações para oferecer a melhor opção para você!
    </div>
    <form element-loading="loading" style="width: 100%;">
      <v-text-field
        v-model="car_board"
        name="car_board"
        label="Placa do carro"
        light
        flat
        class="mb-2"
        hide-details=""
      ></v-text-field>
    </form>
    <v-btn class="mt-5" style="width: 100%;" text @click="next()">
      Próximo
    </v-btn>
    <v-snackbar v-model="snackbar">
      Preencha todos os campos
      <v-btn color="red" text @click="snackbar = false">
        Fechar
      </v-btn>
    </v-snackbar>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
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
      car_board: null,
      loading: false,
    };
  },
  methods: {
    next() {
      if (!this.car_board) {
        this.snackbar = true;
        return;
      }
      this.loading = true;
      this.$store.dispatch('car_board/validate', { car_board: this.car_board });
      setTimeout(() => {
        this.loading = false;
      }, 6000);
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
