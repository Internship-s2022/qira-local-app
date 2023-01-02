import Joi from 'joi';

export const changePasswordValidation = Joi.object({
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
});
