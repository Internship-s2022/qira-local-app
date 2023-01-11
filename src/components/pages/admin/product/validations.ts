import Joi from 'joi';

import { Currency } from 'src/types';

export const ProductValidation = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .regex(/^([A-zÀ-úñ0-9+-\W]+\s)*[ñA-zÀ-ú0-9+-\W]+$/)
    .trim()
    .messages({
      'string.min': 'Mínimo 3 caracteres.',
      'string.max': 'Máximo 50 caracteres.',
      'string.pattern.base': 'Solo letras y números.',
      'string.empty': 'Campo requerido.',
    }),
  description: Joi.string()
    .allow('')
    .min(3)
    .regex(/^[A-zÀ-ú+0-9\W]*$/)
    .trim()
    .messages({
      'string.min': 'Mínimo 3 caracteres.',
      'string.pattern.base': 'Solo letras y números.',
    }),
  price: Joi.number().positive().min(0).max(999999999).precision(2).required().messages({
    'number.positive': 'Precio inválido.',
    'number.min': 'Precio inválido.',
    'number.max': 'Precio inválido.',
    'number.precision': 'Máximo 2 decimales.',
    'any.required': 'Campo requerido.',
    'number.base': 'Solo números.',
    'number.unsafe': 'Precio inválido.',
  }),
  image: Joi.object().required().messages({
    'any.required': 'Campo requerido.',
  }),
  technicalFile: Joi.object().messages({
    'any.required': 'Campo requerido.',
  }),
  brand: Joi.string()
    .min(2)
    .regex(/^([A-zÀ-úñ0-9\W]+\s)*[A-zÀ-úñ0-9\W]+$/)
    .required()
    .trim()
    .messages({
      'string.min': 'Mínimo 2 caracteres.',
      'string.pattern.base': 'Solo letras y números.',
      'string.empty': 'Campo requerido.',
    }),
  category: Joi.string().required().messages({
    'string.empty': 'Campo requerido.',
  }),

  currency: Joi.string().valid(Currency.DOLLAR, Currency.PESO).required().messages({
    'string.empty': 'Campo requerido.',
  }),
  stock: Joi.number().positive().integer().allow(0).required().messages({
    'number.positive': 'Stock inválido.',
    'any.required': 'Campo requerido.',
    'number.base': 'Solo números.',
    'number.integer': 'Solo números enteros.',
    'number.unsafe': 'Stock inválido',
  }),
  isNew: Joi.boolean(),
});
