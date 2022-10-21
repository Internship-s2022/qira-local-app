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
      'string.empty': 'Nombre es un campo requerido.',
    }),
  image: Joi.object({
    base64: Joi.string().required(),
    name: Joi.string().required(),
    type: Joi.string().required(),
    isNew: Joi.boolean().required(),
  })
    .required()
    .messages({
      'any.only': 'Imagen es un campo requerido.',
    }),
});
