import Joi from 'joi';

export const DeliverValidations = Joi.object({
  dni: Joi.string()
    .regex(/^[0-9\-+]{7,8}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener 7-8 caracteres númericos.',
    }),
  id: Joi.string().required().alphanum().messages({
    'string.empty': 'Campo requerido.',
    'string.alphanum': 'Debe contener solo letras y números.',
  }),
});
