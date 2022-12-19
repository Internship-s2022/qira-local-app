import Joi from 'joi';

export const updateUserData = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .regex(/^[a-z0-9]+[_a-z0-9.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z-]+)*(\.[a-z]{2,4})$/i)
    .min(7)
    .required()
    .messages({
      'string.min': 'Debe contener al menos 7 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.email': 'Debe tener formato válido de email.',
      'string.pattern.base': 'Debe tener formato válido de email.',
    }),
  codeArea: Joi.string()
    .regex(/^[0-9\-+]{2,4}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener 2-4 caracteres numéricos.',
    }),
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{7,8}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener 7-8 caracteres númericos.',
    }),
});
