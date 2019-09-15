import Vuex from 'vuex';

import auth from './auth';
import ocr from './ocr';
import search from './search';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      ocr,
      search,
    },
  });
};

export default createStore;
