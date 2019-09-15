import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    search: '',
    categories: [],
    feeds: [],
    loadingSearch: false,
    filters: {},
  },
  mutations: {
    setSearch(state, search) {
      state.search = search;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setFeeds(state, feeds) {
      state.feeds = feeds;
    },
    setLoadingSearch(state, loading) {
      state.loadingSearch = loading;
    },
    addFilter(state, filter) {
      state.filters = _.merge({}, state.filters, filter);
    },
    clearCategories(state) {
      state.categories = [];
    },
    clearFeeds(state) {
      state.feeds = [];
    },
    clearFilter(state) {
      state.filters = {};
    },
  },
  actions: {
    addFilter(context, filter) {
      context.commit('addFilter', filter);
      context.dispatch('search');
    },
    search: _.debounce(
      async function(context) {
        const search = context.state.search;

        if (!search) {
          context.commit('clearCategories');
          context.commit('clearFeeds');
          return;
        }

        context.dispatch('fetchCategories');
        context.dispatch('fetchFeeds');
      },
      500,
      { leading: false, trailing: true }
    ),
    fetchCategories(context) {
      this.$sociusAPI
        .get('/feed/categories', { params: { q: context.state.search } })
        .then(result => {
          context.commit('setCategories', result.docs);
        });
    },
    fetchFeeds(context) {
      context.commit('setLoadingSearch', true);

      this.$sociusAPI
        .get('/feed/sources', {
          params: { q: context.state.search, ...context.state.filters },
        })
        .then(result => {
          context.commit('setLoadingSearch', false);
          context.commit('setFeeds', result.docs);
        })
        .catch(e => {
          context.commit('setLoadingSearch', true);
        });
    },
  },
  getters: {},
};
