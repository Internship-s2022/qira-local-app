import axios from 'axios';

import store from 'src/redux/store';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// export const apiBCRA = axios.create({
//   baseURL: 'https://api.estadisticasbcra.com/usd_of',
//   timeout: 15000,
//   headers: {
//     'Content-Type': 'application/json',
//     Authorization:
//       'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg0MjEwMTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJnaW5hLnNjaGlhcHBhcGlldHJhQHJhZGl1bXJvY2tldC5jb20ifQ.dsKi-6AWNRXu3K7jv2rBG-U93RKI1luipXIEsOB0b8v9rd8dCENgJamWkJRt_iX64WYDoz1YGXXOT_yep8Gn1A',
//   },
// });

export const apiBCRA = axios.create({
  url: 'https://api.estadisticasbcra.com/usd_of',
  headers: {
    Authorization:
      'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTg0MjEwMTAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJnaW5hLnNjaGlhcHBhcGlldHJhQHJhZGl1bXJvY2tldC5jb20ifQ.dsKi-6AWNRXu3K7jv2rBG-U93RKI1luipXIEsOB0b8v9rd8dCENgJamWkJRt_iX64WYDoz1YGXXOT_yep8Gn1A',
  },
});

// axios(apiBCRA)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

api.interceptors.response.use((response) => {
  const formattedResponse = {
    ...response.data,
    status: response.status,
  };
  return formattedResponse;
});

api.interceptors.request.use((config) => {
  if (!config.headers.token) {
    config.headers.token = store.getState().auth.token;
  }
  return config;
});
