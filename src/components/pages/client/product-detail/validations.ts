import Joi from 'joi';

export const CounterValidation = (stock = 0) => {
  return Joi.object({
    counter: Joi.number().max(stock).messages({
      'number.base': 'Solo números.',
      'number.max': 'Supera el stock.',
      'number.unsafe': 'Cantidad inválida.',
    }),
  });
};
