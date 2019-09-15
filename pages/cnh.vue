<template>
  <v-container>
    <img id="myImage" style="display: none" />
    opa
  </v-container>
</template>

<script>
export default {
  created() {
    navigator.camera.getPicture(this.onSuccess, this.onFail, {
      destinationType: navigator.camera.DestinationType.DATA_URL,
      quality: 50,
    });
  },
  methods: {
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
