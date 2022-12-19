import { action } from 'typesafe-actions';

import { Actions } from './types';

export const openSidebar = () => action(Actions.OPEN_SIDEBAR);

export const closeSidebar = () => action(Actions.CLOSE_SIDEBAR);
