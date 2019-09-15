import Axios from 'axios';

export default {
  baseURL: 'https://gateway.gr1d.io/sandbox/infocar/cnh/v1/INFOCAR_CNH',
  namespaced: true,
  state: {
    // feed: [],
  },
  mutations: {
    // setFeed(state, feed) {
    //   state.feed = feed;
    // },
  },
  actions: {
    create(context, test) {
      console.log(test);
      Axios.post(this.baseURL + '/job/create', context, {
        headers: { 'X-Api-Key': 'xxxx' },
      }).then(result => {
        // context.commit('setFeed', result.docs);
      });
    },
  },
  getters: {},
};
