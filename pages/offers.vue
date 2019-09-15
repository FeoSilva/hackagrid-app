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
        <div
          class="mt-3"
          style="height: 40px; color: #254473; font-size: 20px; font-family: 'Roboto'"
        >
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

      <OfferCard class="mb-4 mx-4" />
      <OfferCard class="mb-4 mx-4" />
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
  computed: {},
  created() {},
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
</style>
