import Joi from 'joi';

export const CategoryValidations = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .messages({
      'string.min': 'Nombre inválido, debe contener al menos 3 caracteres.',
      'string.max': 'Nombre inválido, debe contener menos de 50 caracteres.',
      'string.pattern.base': 'Nombre inválido, debe contener solo letras.',
      'string.required': 'Nombre es un campo requerido.',
    }),
});
