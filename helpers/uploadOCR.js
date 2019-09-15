import Axios from 'axios';
import dataURLtoFile from '@/helpers/dataURLtoFile';

export default (id, image) => {
  console.log(image);
  // generate file from base64 string
  const file = dataURLtoFile(image);

  // put file into form data
  const data = new FormData();
  data.append('File', file, file.name);

  let baseURLOCR = 'https://gateway.gr1d.io/sandbox/compline/cnh/v1';

  let key = 'e58a4197-fd3d-44f0-bd71-b96a40201ef4';
  Axios.put(baseURLOCR + '/job/upload/' + id + '/1', data, {
    headers: {
      'X-Api-Key': key,
      'Content-Type': 'multipart/form-data',
      accept: '*/*',
    },
  }).then(result => {
    Axios.put(
      baseURLOCR + '/job/upload/' + id,
      {},
      {
        headers: {
          'X-Api-Key': key,
          'Content-Type': 'multipart/form-data',
          accept: '*/*',
        },
      }
    ).then(result => {
      this.$route.push('/car-board');
    });
  });
};
