import { signInWithEmailAndPassword } from 'firebase/auth';
import { Dispatch } from 'redux';

import { auth } from 'src/helper/firebase';

import { RootAction } from '../store';
import { getAuthUserActions, loginActions } from './actions';
import { getAuthUser } from './api';

export const login = (credentials) => {
  return async (dispatch: Dispatch<RootAction>) => {
    try {
      dispatch(loginActions.request(''));
      const response = await signInWithEmailAndPassword(
        auth(),
        credentials.email,
        credentials.password,
      );
      const token = await response.user.getIdToken();
      const {
        claims: { role },
      } = await response.user.getIdTokenResult();
      const userData = await getAuthUser(token);
      sessionStorage.setItem('user', JSON.stringify(userData.data));
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('role', role);
      return dispatch(loginActions.success({ user: userData.data, token: token, role: role }));
    } catch (error) {
      return dispatch(loginActions.failure(error));
    }
  };
};

export const getAuthUserThunk = (token) => {
  return async (dispatch: Dispatch<RootAction>) => {
    try {
      dispatch(getAuthUserActions.request(''));
      const response = await getAuthUser(token);
      if (response.data) {
        dispatch(getAuthUserActions.success(response.data));
      }
    } catch (error) {
      dispatch(getAuthUserActions.failure(error));
    }
  };
};
