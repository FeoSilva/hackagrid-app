<template>
  <div row class="pa-0" fill-height flex-wrap>
    <div
      class="white"
      style="height: 210px; box-shadow: 0px 2px 6px rgba(123, 123, 123, 0.25);"
    >
      <Header no-back class="pt-4 pb-2" />
      <v-layout
        justify-center
        align-center
        class="mt-2"
        wrap
        column
        style="padding: 0px 26px"
      >
        <div class="mt-3 mb-2 user-details">
          <img
            src="@/static/person.jpg"
            style="width: 38px; height: 38px; position: absolute; border-radius: 50%; left: 0px;"
          />
          Olá <b>Renan</b>, tudo bem?
        </div>

        <v-btn
          class="mt-2"
          color="#F16A34"
          dark
          rounded
          style="width: 100%;"
          @click="$router.push('/cnh')"
          >Fazer seguro</v-btn
        >
      </v-layout>
    </div>
    <v-layout wrap column>
      <div class="mx-4 mt-4 mb-4">
        <div class="title">Acontencendo agora</div>
        <div class="subtitle">Acompanhe nossas opções de cotas</div>
      </div>

      <OfferCard
        v-for="(offer, index) in offers"
        :key="index"
        :offer="offer"
        class="mb-4 mx-4"
        @click.native="open(offer)"
      />
    </v-layout>
  </div>
</template>
<script>
import Header from '@/components/Header';
import OfferCard from '@/components/OfferCard';

export default {
  components: {
    Header,
    OfferCard,
  },
  data() {
    return {
      offers: [],
    };
  },
  computed: {},
  created() {
    let min = Math.ceil(37);
    let max = Math.floor(50);

    for (let i = 0; i <= 10; i++) {
      let limit = 50;
      let possiblePrices = [
        'R$ 554,33',
        'R$ 360,85',
        'R$ 144,35',
        'R$ 88,90',
        'R$ 232,33',
        'R$ 80,55',
        'R$ 55,66',
        'R$ 99,00',
      ];

      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      let randomPrice =
        possiblePrices[Math.floor(Math.random() * possiblePrices.length)];
      this.offers.push({
        limit: 50,
        vacancies: limit - random,
        price: randomPrice,
      });
    }
    setTimeout(() => {
      this.offers[0].price = 'R$ 204,89';
    }, 2000);

    setTimeout(() => {
      this.offers[1].price = 'R$ 88,59';
    }, 4000);
  },
  methods: {
    open(offer) {
      this.$router.push({
        path: '/offer-detail',
        query: {
          offer: offer,
        },
      });
    },
  },
};
</script>
<style scoped>
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #254473;
}
.subtitle {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 146.4%;
  color: #828282;
}
.user-details {
  height: 40px;
  color: #254473;
  font-size: 20px;
  font-family: 'Roboto';
  position: relative;
  width: 100%;
  text-align: center;
}
</style>
