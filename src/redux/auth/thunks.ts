import { signInWithEmailAndPassword } from 'firebase/auth';
import { Dispatch } from 'redux';

import { auth } from 'src/helper/firebase';

import { RootAction } from '../store';
import {
  getAuthUserActions,
  loginActions,
  logoutActions,
  registerActions,
  updateClientInformationActions,
} from './actions';
import { getAuthUser, registerUser, updateClientInformationApi } from './api';

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
      return dispatch(loginActions.success({ user: userData.data, token: token, role: role }));
    } catch (error) {
      return dispatch(loginActions.failure(error));
    }
  };
};

export const getAuthUserThunk = () => {
  return async (dispatch: Dispatch<RootAction>) => {
    try {
      dispatch(getAuthUserActions.request(''));
      const response = await getAuthUser();
      if (response.data) {
        dispatch(getAuthUserActions.success(response.data));
      }
    } catch (error) {
      return dispatch(getAuthUserActions.failure(error));
    }
  };
};

export const register = (user) => {
  return async (dispatch: Dispatch<RootAction>) => {
    try {
      dispatch(registerActions.request());
      const response = await registerUser(user);
      if (response.data) {
        return dispatch(registerActions.success());
      }
    } catch (error) {
      return dispatch(registerActions.failure(error.response.data));
    }
  };
};

export const updateClientInformation = (data) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(updateClientInformationActions.request());
      const response = await updateClientInformationApi(data);
      return dispatch(updateClientInformationActions.success(response.data));
    } catch (error) {
      dispatch(updateClientInformationActions.failure(error));
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<RootAction>) => {
    try {
      dispatch(logoutActions.request());
      await auth().signOut();
      return dispatch(logoutActions.success());
    } catch (error) {
      return dispatch(logoutActions.failure(error));
    }
  };
};
