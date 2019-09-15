import Axios from 'axios';
import _ from 'lodash';

export default {
  data() {
    return {};
  },
  namespaced: true,
  state: {
    car: null,
  },
  mutations: {
    setCar(state, car) {
      state.car = car;
    },
  },
  actions: {
    validate(context, car_board) {
      let baseURLOCR = 'https://gateway.gr1d.io/sandbox/infocar/codificacao/v1';
      let key = 'e58a4197-fd3d-44f0-bd71-b96a40201ef4';

      Axios.post(
        baseURLOCR + '/INFOCAR_CODIFICACAO',
        {
          parameters: {
            dado: car_board,
            tipo: 'PLACA',
          },
        },
        {
          headers: {
            'X-Api-Key': key,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      ).then(result => {
        let CarData = _.get(
          result.data,
          'soap:Envelope.soap:Body.CodificacaoFIPEResponse.CodificacaoFIPEResponse.CodificacaoFIPEResult.RESPOSTA.INFOCAR_CODIFICACAO_XML',
          {}
        );
        context.commit('setCar', CarData);
        this.$router.push('/data-confirm');
      });
    },
  },
  getters: {},
};
