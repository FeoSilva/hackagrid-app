import jwt from 'jsonwebtoken';

export default {
  namespaced: true,
  state: {
    token: null,
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  actions: {
    authenticateUser(context, authData) {
      const authPath = authData.isLogin ? '/auth/login' : '/auth/signup';

      return this.$sociusAPI
        .post(authPath, {
          email: authData.email,
          password: authData.password,
        })
        .then(result => {
          context.commit('setToken', result.token);
          context.commit('setUser', jwt.decode(result.token));

          localStorage.setItem('token', result.token);
        });
    },
    checkAuth(context) {
      const token = localStorage.getItem('token');

      if (!token) {
        context.dispatch('logout');
        return;
      }

      context.commit('setToken', token);
      context.commit('setUser', jwt.decode(token));
    },
    logout(context) {
      context.commit('clearToken');
      context.commit('clearUser');

      this.$router.push('/auth');
    },
    refreshUser(context) {
      this.$sociusAPI.get('/users/me').then(result => {
        context.commit('setUser', result);
      });
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.token != null;
    },
  },
};
