import Axios from 'axios';
import _ from 'lodash';

import uploadOCR from '@/helpers/uploadOCR';

export default {
  data() {
    return {};
  },
  namespaced: true,
  state: {
    cnh: null,
  },
  mutations: {
    setCNH(state, cnh) {
      state.cnh = cnh;
    },
  },
  actions: {
    create(context, image) {
      let baseURLOCR = 'https://gateway.gr1d.io/sandbox/compline/cnh/v1';
      let key = 'e58a4197-fd3d-44f0-bd71-b96a40201ef4';

      Axios.post(
        baseURLOCR + '/job/create',
        {},
        {
          headers: {
            'X-Api-Key': key,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      ).then(result => {
        uploadOCR(result.data.idJob, image.base64);
      });
    },

    createManual(context, { cpf, rg, register_number_cnh }) {
      let baseURLOCRManual =
        'https://gateway.gr1d.io/sandbox/infocar/cnh/v1/INFOCAR_CNH';
      let key = '986ac350-6aef-43c0-9707-8ea597215a41';
      Axios.post(
        baseURLOCRManual,
        {
          parameters: {
            cpf: cpf,
            numero_rg: rg,
            numero_registro: register_number_cnh,
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
        let CNHData = _.get(
          result.data,
          'soap:Envelope.soap:Body.CNHResponse.CNHResult.INFO-XML.RESPOSTA.INFOCAR_CNH',
          {}
        );
        context.commit('setCNH', CNHData);
      });
    },
  },
  getters: {},
};
