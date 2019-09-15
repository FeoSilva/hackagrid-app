<template>
  <div class="header">
    <v-btn v-if="!noBack" class="back" icon @click="$router.back()">
      <v-icon size="34">mdi-arrow-left</v-icon>
    </v-btn>
    <img src="@/static/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    noBack: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.header {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
}
.back {
  position: absolute;
  left: 0;
}
</style>
