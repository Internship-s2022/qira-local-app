import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootState } from '../store';

interface Image {
  key: string;
  url: string;
}
export interface Category {
  name: string;
  image: Image;
  isActive: boolean;
  logicDelete: boolean;
}

export type AppThunk = ActionCreator<ThunkAction<void, RootState, null, Action<null>>>;
