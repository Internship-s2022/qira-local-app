import Joi from 'joi';

export const AuthorizedValidations = Joi.object({
  authorized: Joi.array().items(
    Joi.object({
      firstName: Joi.string()
        .min(3)
        .required()
        .regex(/^([A-zÀ-úñ]+\s)*[A-zÀ-úñ]+$/)
        .messages({
          'string.min': 'Debe contener al menos 3 caracteres.',
          'string.pattern.base': 'Debe contener solo letras.',
          'string.empty': 'Campo requerido.',
        }),
      lastName: Joi.string()
        .min(3)
        .required()
        .regex(/^([A-zÀ-úñ]+\s)*[A-zÀ-úñ]+$/)
        .messages({
          'string.min': 'Debe contener al menos 3 caracteres.',
          'string.pattern.base': 'Debe contener solo letras.',
          'string.empty': 'Campo requerido.',
        }),
      dni: Joi.string()
        .regex(/^[0-9\-+]{7,8}$/)
        .required()
        .messages({
          'string.empty': 'Campo requerido.',
          'string.pattern.base': 'Debe contener 7-8 dígitos.',
        }),
      phoneNumber: Joi.string()
        .regex(/^[0-9\-+]{8,11}$/)
        .required()
        .messages({
          'string.empty': 'Campo requerido.',
          'string.pattern.base': 'Debe contener 8-11 dígitos.',
        }),
    }),
  ),
});
