<template>
  <v-container
    class="white px-5"
    fill-height
    style="flex-direction: column"
    wrap
  >
    <Header />
    <div style="height: 100%;"></div>
    <div class="text mt-5 mb-4">
      Renan, seu carro é:
    </div>
    <div style="width: 100%;">
      <div class="car-name">Kia Picanto xyz</div>
      Cor prata<br />
      2011/12<br />
      Gasolina
    </div>
    <v-btn
      color="#F16A34"
      class="mt-5"
      style="width: 100%; font-weight: bold;"
      text
      @click="next()"
    >
      Sim, está correto
    </v-btn>
    <v-btn
      color="#F16A34"
      style="width: 100%; font-size: 12px; margin-bottom: 32px;"
      text
      @click="back()"
    >
      Não, preciso editar
    </v-btn>
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
    };
  },
  methods: {
    next() {
      this.$router.push('/informations');
    },
    back() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.text {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 146.4%;
  color: #254473;
  width: 100%;
}
.car-name {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 146.4%;
  color: #4f4f4f;
}
</style>
