<template>
  <v-container
    class="pa-0"
    fill-height
    align-baseline
    style="flex-direction: column"
  >
    <div class="header-offer">
      <img src="@/static/logo-white.png" height="48" class="mt-3" />
      <div class="detail">
        <div class="title">Seguro Automotivo</div>
        <div style="display: flex;">
          <div style="flex-grow: 1;">
            <div class="vacancies">
              {{ (offer.limit || 50) - offer.vacancies || 22 }}/{{
                offer.limit || 50
              }}
            </div>
            <div class="people-per-group">pessoas no grupo</div>
          </div>
          <div style="flex-grow: 1;">
            <div class="price">
              <span class="prefix">R$</span>
              {{ fixPrice(offer.price) || '144,55' }}
            </div>
            <div class="frequency">mensal</div>
          </div>
        </div>
        <div class="mt-3" style="display: flex">
          <div style="flex-grow: 1">
            <div class="remaining">Faltam:</div>
            <div class="time-to-finish">12h27m</div>
            <div class="to-close">para fechar</div>
          </div>
          <div style="flex-grow: 1; text-align: right">
            <div class="remaining mb-2">Empresa ganhadora:</div>
            <img src="@/static/insurers/porto-seguro.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="coverage">O que esse plano cobre?</div>
      <div class="list mt-2">
        <div class="item">
          <div class="bullet"></div>
          Roubo e Furto
        </div>
      </div>
      <div class="list mt-2">
        <div class="item">
          <div class="bullet"></div>
          Assistência 24h
        </div>
      </div>
      <div class="list mt-2">
        <div class="item">
          <div class="bullet red"></div>
          Alagamento
        </div>
      </div>
      <div class="list mt-2">
        <div class="item">
          <div class="bullet red"></div>
          Colisão - Só perda total
        </div>
      </div>
    </div>
    <v-btn
      color="#F16A34"
      class="my-5"
      style="width: 100%;"
      text
      @click="next()"
    >
      Participar
    </v-btn>
  </v-container>
</template>

<script>
import _ from 'lodash';
export default {
  data() {
    return {
      offer: null,
    };
  },
  created() {
    this.offer = _.get(this.$route, 'query.offer', {
      limit: 50,
      price: 'R$ 554,33',
      vacancies: 1,
    });
  },
  methods: {
    next() {
      this.$router.push('/finished', {
        offer: this.offer,
      });
    },
    fixPrice(price = '') {
      return price.replace('R$ ', '');
    },
  },
};
</script>
<style scoped>
.header-offer {
  background: #2b2b49;
  box-shadow: 0px 2px 6px rgba(123, 123, 123, 0.25);
  border-radius: 0px 0px 4px 4px;
  min-height: 269px;
  width: 100%;
  text-align: center;
  padding-left: 24px;
  padding-right: 24px;
}
.title {
  color: #2b2b49;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  padding-top: 10px;
  padding-bottom: 16px;
}
.detail {
  background: #ffffff;
  border: 4px solid #2b2b49;
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.25);
  border-radius: 12px;
  width: 100%;
  min-height: 180px;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
}
.vacancies {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #254473;
}
.people-per-group {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #828282;
}
.price {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  text-align: right;
  color: #f16a34;
}
.prefix {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #f16a34;
}
.frequency {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-align: right;
  color: #828282;
}
.remaining {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #828282;
}
.time-to-finish {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #254473;
}
.to-close {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #828282;
}
.details {
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 12px;
  height: 100%;
}
.coverage {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 146.4%;
  color: #254473;
}
.bullet {
  width: 10px;
  height: 10px;
  background: #6fcf97;
  border-radius: 50%;
  margin-right: 12px;
}
.item {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 200.4%;
  color: #254473;
  display: flex;
  align-items: center;
}
.bullet.red {
  background: #eb5757;
}
</style>
