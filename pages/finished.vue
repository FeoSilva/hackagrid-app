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
          >Fazer outro seguro</v-btn
        >
      </v-layout>
    </div>
    <v-layout wrap column>
      <div class="mx-4 mt-4 mb-4">
        <div class="title">Você está participando</div>
        <InsuranceConfirmed :offer="offer" />
      </div>

      <div class="mx-4 mt-4 mb-4">
        <div class="title">Acontencendo agora</div>
        <div class="subtitle">Acompanhe nossas opções de cotas</div>
      </div>

      <OfferCard class="mb-4 mx-4" />
      <OfferCard class="mb-4 mx-4" />
    </v-layout>
  </div>
</template>
<script>
import Header from '@/components/Header';
import OfferCard from '@/components/OfferCard';
import InsuranceConfirmed from '@/components/InsuranceConfirmed';
import _ from 'lodash';
export default {
  components: {
    Header,
    OfferCard,
    InsuranceConfirmed,
  },
  data() {
    return {
      offer: null,
    };
  },
  computed: {},
  created() {
    console.log(this.$route);
    this.offer = _.get(this.$route, 'query.offer', {
      limit: 50,
      price: 'R$ 554,33',
      vacancies: 1,
    });
  },
  methods: {},
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
