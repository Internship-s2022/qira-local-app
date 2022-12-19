import { api } from 'src/config/api';

import { ExchangeRate } from './types';

export const getExchangeRate = () => api.get<ExchangeRate>('/public/exchange-rate');
