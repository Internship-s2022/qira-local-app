import { action } from 'typesafe-actions';

import { Actions, ModalTypes, Options } from './types';

export const openModal = (type: ModalTypes, options?: Options) =>
  action(Actions.OPEN_MODAL, { type, options });
export const closeModal = () => action(Actions.CLOSE_MODAL);
