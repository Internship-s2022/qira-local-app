import Joi from 'joi';

export const CategoryValidations = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.max': 'Debe contener menos de 50 caracteres.',
      'string.pattern.base': 'Debe contener solo letras.',
      'string.empty': 'Campo requerido.',
    }),
  image: Joi.object().required().messages({
    'any.required': 'Campo requerido.',
  }),
  url: Joi.string()
    .regex(/^([a-z-]*)$/)
    .required()
    .messages({
      'string.pattern.base': 'Debe contener solo minúsculas y -.',
      'string.empty': 'Campo requerido.',
    }),
});
