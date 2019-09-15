import _ from 'lodash';
import axios from 'axios';

export default function({ app, store }, inject) {
  const sociusAPI = axios.create({ baseURL: process.env.SOCIUS_API_URL });

  sociusAPI.interceptors.request.use(
    config => {
      if (store.getters['auth/isAuthenticated']) {
        config.headers.common.Authorization = `Bearer ${store.state.auth.token}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  sociusAPI.interceptors.response.use(
    function(response) {
      return response.data;
    },
    function(error) {
      // Logout on Unauthorized
      if (_.get(error, 'response.status') == 401) {
        store.dispatch('auth/logout');
      }
      return Promise.reject(error);
    }
  );

  inject('sociusAPI', sociusAPI);
}
