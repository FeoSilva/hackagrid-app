<template>
  <div class="insurance-confirmed-card">
    <div class="insurance-confirmed-title">Seguro Automotivo</div>
    <div style="display: flex;">
      <div style="flex-grow: 1;">
        <div class="vacancies">10/20</div>
        <div class="people-per-group">pessoas no grupo</div>
      </div>
      <div style="flex-grow: 1;">
        <div class="price"><span class="prefix">R$</span> 1000,00</div>
        <div class="frequency">mensal</div>
      </div>
    </div>
    <div class="mt-3" style="display: flex">
      <div style="flex-grow: 1">
        <div class="remaining">Faltam:</div>
        <div class="time-to-finish">00h00m</div>
        <div class="to-close">para fechar</div>
      </div>
      <div style="flex-grow: 1; text-align: right">
        <v-btn color="#F16A34" dark style="height: 32px; border-radius: 12px;"
          >Acompanhar</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'InsuranceConfirmedCard',
};
</script>
<style scoped>
.insurance-confirmed-card {
  background: #254473;
  border: 4px solid #2b2b49;
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.25);
  border-radius: 4px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
}
.insurance-confirmed-title {
  color: #ffffff;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  padding-top: 10px;
  padding-bottom: 16px;
}
.vacancies {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
}
.people-per-group {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
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
  color: #ffffff;
}
.remaining {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
}
.time-to-finish {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #e98c67;
}
.to-close {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
}
</style>
