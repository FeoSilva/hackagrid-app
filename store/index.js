import Vuex from 'vuex';

import auth from './auth';
import ocr from './ocr';
import car_board from './car-board';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      ocr,
      car_board,
    },
  });
};

export default createStore;
