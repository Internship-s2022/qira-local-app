import { action } from 'typesafe-actions';

import { Actions } from './types';

// export const getCategoriesActions = createAsyncAction(
//   Actions.GET_CATEGORIES_PENDING,
//   Actions.GET_CATEGORIES_SUCCESS,
//   Actions.GET_CATEGORIES_ERROR,
// )<string, Category[], ApiResponse<unknown>>();

export const modalActions = () => action(Actions.OPEN_MODAL, Actions.CLOSE_MODAL);
