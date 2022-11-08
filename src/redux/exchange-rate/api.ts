import { apiBCRA } from 'src/config/api';

import { ExchangeRate } from './types';

export const getExchangeRate = () => apiBCRA.get<ExchangeRate[]>('');
