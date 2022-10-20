import Joi from 'joi';

import { IvaCondition } from 'src/types';

export const signUpValidations = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(7)
    .required()
    .messages({
      'string.min': 'Debe contener al menos 7 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.email': 'Debe tener formato válido de email',
    }),
  password: Joi.string()
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .min(8)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener letras y números.',
      'string.min': 'Debe contener al menos 8 caracteres.',
    }),
  repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': 'Campo requerido.',
    'any.only': 'Las contraseñas no coinciden',
  }),
  codeArea: Joi.string()
    .regex(/^[0-9\-+]{2,4}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener 2-4 caracteres numéricos',
    }),
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{7,8}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener 7-8 caracteres númericos.',
    }),
  businessName: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.max': 'No debe contener mas de 50 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener solo letras.',
    }),
  cuit: Joi.string()
    .regex(/^[0-9\-+]{11}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener solo 11 caracteres numéricos.',
    }),
  ivaCondition: Joi.string()
    .valid(
      IvaCondition.registeredResponsible,
      IvaCondition.selfEmployment,
      IvaCondition.exempt,
      IvaCondition.finalConsumer,
    )
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'any.only': 'Campo requerido.',
    }),
  province: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .required()
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener solo letras.',
    }),
  city: Joi.string().min(3).required().messages({
    'string.min': 'Debe contener al menos 3 caracteres.',
    'string.empty': 'Campo requerido.',
  }),
  zipCode: Joi.string()
    .regex(/^[0-9\-+]{4}$/)
    .required()
    .messages({
      'string.pattern.base': 'Debe contener solo 4 números.',
      'string.empty': 'Campo requerido.',
    }),
  street: Joi.string()
    .regex(/[a-zA-Z0-9]+\s[a-zA-Z0-9]/)
    .min(3)
    .required()
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.pattern.base': 'Debe contener letras y números.',
      'string.empty': 'Campo requerido.',
    }),
});
