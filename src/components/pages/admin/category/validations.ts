import Joi from 'joi';

export const CategoryValidations = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .regex(/^([A-zÀ-úñ]+\s)*[A-zÀ-úñ]+$/)
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.max': 'Debe contener menos de 30 caracteres.',
      'string.pattern.base': 'Debe contener solo letras.',
      'string.empty': 'Campo requerido.',
    }),
  image: Joi.object().required().messages({
    'any.required': 'Campo requerido.',
  }),
  url: Joi.string()
    .regex(/^([a-z-]*[a-z]+)$/)
    .required()
    .messages({
      'string.pattern.base': 'Debe contener solo minúsculas y - intermedio.',
      'string.empty': 'Campo requerido.',
    }),
});
