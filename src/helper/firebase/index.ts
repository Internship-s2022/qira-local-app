import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { setToken } from 'src/redux/auth/actions';
import { store } from 'src/redux/store';

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
  auth().onIdTokenChanged(async (user) => {
    if (user) {
      const token = await user.getIdToken();
      const {
        claims: { role },
      } = await user.getIdTokenResult();
      store.dispatch(setToken(role, token));
    }
  });
};
