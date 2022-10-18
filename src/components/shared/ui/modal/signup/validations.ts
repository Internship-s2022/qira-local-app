import Joi from 'joi';

import { IvaCondition } from 'src/types';

export const signUpValidations = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(7)
    .required()
    .messages({
      'string.min': 'Email inválido, debe contener al menos 7 caracteres.',
      'any.required': 'Email es un campo requerido.',
      'string.email': 'Email inválido, debe tener formato válido de email',
    }),
  password: Joi.string().alphanum().min(8).required().messages({
    'any.required': 'Contraseña es un campo requerido.',
    'string.alphanum': 'Contraseña inválida, debe contener letras y números.',
    'string.min': 'Contraseña inválida, debe contener al menos 8 caracteres.',
  }),
  repeatPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.required': 'Repetir contraseña es un campo requerido.',
    'string.valid': 'Las contraseñas no coinciden.',
  }),
  codeArea: Joi.string()
    .regex(/^[0-9\-+]{2,4}$/)
    .required()
    .messages({
      'any.required': 'Código de área es un campo requerido.',
      'string.pattern.base':
        'Código de área inválido, debe contener entre 2 y 4 caracteres numéricos',
    }),
  phoneNumber: Joi.string()
    .regex(/^[0-9\-+]{7,8}$/)
    .required()
    .messages({
      'any.required': 'Número de teléfono es un campo requerido.',
      'string.pattern.base':
        'Número de teléfono inválido, debe contener entre 7 y 8 caracteres númericos.',
    }),
  businessName: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.min': 'Razón social inválida, debe contener al menos 3 caracteres.',
      'string.max': 'Razón social inválida, no debe contener mas de 50 caracteres.',
      'any.required': 'Razón social es un campo requerido.',
      'string.pattern.base': 'Razón social inválida, debe contener solo letras.',
    }),
  cuit: Joi.string()
    .regex(/^[0-9\-+]{11}$/)
    .required()
    .messages({
      'any.required': 'Cuit es un campo requerido.',
      'string.pattern.base': 'Cuit inválido, debe contener solo 11 caracteres numéricos.',
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
      'any.required': 'Condición de IVA es un campo requerido.',
      'string.valid':
        'Solo se acepta CONSUMIDOR FINAL, EXENTO, RESPONSABLE INSCRIPTO o MONOTRIBUTO.',
    }),
  province: Joi.string()
    .regex(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
    .min(3)
    .required()
    .messages({
      'string.min': 'Provincia inválida, debe contener al menos 3 caracteres.',
      'any.required': 'Provincia es un campo requerido.',
      'string.pattern.base': 'Provincia inválida, debe contener solo letras.',
    }),
  city: Joi.string().min(3).required().messages({
    'string.min': 'Ciudad inválida, debe contener al menos 3 caracteres.',
    'any.required': 'Ciudad es un campo requerido.',
  }),
  zipCode: Joi.string()
    .regex(/^[0-9\-+]{4}$/)
    .required()
    .messages({
      'string.pattern.base': 'Código postal inválido, debe contener solo 4 caracteres numéricos.',
      'any.required': 'Código postal es un campo requerido.',
    }),
  street: Joi.string()
    .regex(/[a-zA-Z0-9]+\s[a-zA-Z0-9]/)
    .min(3)
    .required()
    .messages({
      'string.min': 'Dirección inválida, debe contener al menos 3 caracteres.',
      'string.pattern.base': 'Dirección inválida, debe contener letras y números.',
      'any.required': 'Dirección es un campo requerido.',
    }),
});
