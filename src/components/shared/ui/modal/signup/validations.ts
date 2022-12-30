import Joi from 'joi';

import { IvaCondition } from 'src/types';

export const signUpValidations = Joi.object({
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
  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.min': 'Debe contener al menos 8 caracteres.',
      'string.pattern.base': 'Debe contener letras y números.',
    }),
  repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': 'Campo requerido.',
    'any.only': 'Las contraseñas no coinciden.',
  }),
  codeArea: Joi.string()
    .regex(/^[0-9\-+]{2,4}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener 2-4 dígitos.',
    }),
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{7,8}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener 7-8 dígitos.',
    }),
  businessName: Joi.string()
    .regex(/^([0-9]*)(\s?[A-zÀ-ú]+)(\s[0-9A-zÀ-ú]+)*\s?$/)
    .min(3)
    .max(50)
    .trim()
    .required()
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.max': 'No debe contener mas de 50 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Razón social inválida.',
    }),
  cuit: Joi.string()
    .regex(/^[0-9\-+]{11}$/)
    .required()
    .messages({
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener solo 11 dígitos.',
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
    .trim()
    .required()
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'Debe contener solo letras.',
    }),
  city: Joi.string()
    .regex(/^([a-zA-Z0-9]+\s)?([a-zA-Z]+\s*)*$/)
    .min(3)
    .trim()
    .required()
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.empty': 'Campo requerido.',
      'string.pattern.base': 'La localidad es inválida.',
    }),
  zipCode: Joi.string()
    .regex(/^[0-9\-+]{4}$/)
    .required()
    .messages({
      'string.pattern.base': 'Debe contener 4 dígitos.',
      'string.empty': 'Campo requerido.',
    }),
  street: Joi.string()
    .regex(/^([0-9]*)(\s?[A-zÀ-ú]+)(\s[0-9A-zÀ-ú]+)*\s?$/)
    .min(3)
    .required()
    .trim()
    .messages({
      'string.min': 'Debe contener al menos 3 caracteres.',
      'string.pattern.base': 'La dirección es inválida.',
      'string.empty': 'Campo requerido.',
    }),
});
