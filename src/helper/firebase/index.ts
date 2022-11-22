import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { setAuthentication, setToken } from 'src/redux/auth/actions';
import getStore from 'src/redux/store';

const { store } = getStore();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const auth = () => getAuth(firebaseApp);

export const tokenListener = () => {
  console.log('---- 1 ----');
  auth().onIdTokenChanged(async (user) => {
    console.log('---- 2 ----');
    console.log('---- 3 - user ----', user);
    if (user) {
      console.log('---- 4 - if (user) ----');
      const token = await user.getIdToken();
      console.log('---- 5 - token ----', token);
      const {
        claims: { role },
      } = await user.getIdTokenResult();
      console.log('---- 6 - getIdTokenResult ----', role);
      store.dispatch(setToken(role, token));
      console.log('---- 7 - setToken ----');
    }
  });
};
