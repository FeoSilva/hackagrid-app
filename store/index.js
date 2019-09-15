import Vuex from 'vuex';

import auth from './auth';
import ocr from './ocr';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      ocr,
    },
  });
};

export default createStore;
