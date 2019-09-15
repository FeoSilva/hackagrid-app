<template>
  <v-container class="pa-0 background-home" fluid fill-height>
    <v-layout
      justify-center
      wrap
      style="padding: 36px; position: relative; overflow: hidden;"
    >
      <v-flex xs12 style="z-index: 1; text-align: center;">
        <img src="@/static/logo-white.png" />
      </v-flex>
      <v-flex xs12 sm8 md4>
        <form @submit.prevent="onSubmit">
          <v-flex
            ><v-btn
              color="primary"
              depressed
              type="submit"
              style="width: 100%; height: 66px;"
              @click="login()"
            >
              {{ authText }}
            </v-btn>
          </v-flex>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      isLogin: true,
      email: '',
      password: '',
    };
  },
  computed: {
    authText: function() {
      return this.isLogin ? 'ENTRAR FACEBOOK' : 'Register';
    },
    changeText: function() {
      return this.isLogin ? 'Create an account' : 'Already registed? Login';
    },
  },
  created() {
    if (this.$store.getters['auth/isAuthenticated']) {
      this.$router.push('/');
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('auth/authenticateUser', {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push('/feed');
        })
        .catch(e => {
          console.log(e);
        });
    },
    login() {
      this.$router.push('/offers');
    },
  },
};
</script>

<style scoped>
.background-home {
  background-image: url('../static/background-home.jpg');
  background-size: cover;
}
</style>
