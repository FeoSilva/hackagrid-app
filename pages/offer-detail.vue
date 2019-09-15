<template>
  <v-container class="pa-0" fill-height align-baseline>
    <div class="header-offer">
      <img src="@/static/logo-white.png" height="48" class="mt-3" />
      <div class="detail">
        <div class="title">Seguro automotivo</div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
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
.detail {
  background: #ffffff;
  border: 4px solid #2b2b49;
  box-shadow: 0px 2px 4px rgba(100, 100, 100, 0.25);
  border-radius: 12px;
  width: 100%;
  min-height: 180px;
}
</style>
