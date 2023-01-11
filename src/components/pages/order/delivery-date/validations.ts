import { addBusinessDays, addYears, format } from 'date-fns';
import Joi from 'joi';

const formattedMinDate = format(addBusinessDays(new Date(), 5), 'MM/dd/yyyy');
const formattedMaxDate = format(addYears(addBusinessDays(new Date(), 5), 1), 'MM/dd/yyyy');

export const DeliveryDateValidations = Joi.object({
  estimatedDeliveryDate: Joi.date()
    .required()
    .min(formattedMinDate)
    .max(formattedMaxDate)
    .messages({
      'any.required': 'Campo requerido.',
      'date.base': 'Formato de fecha inválido.',
      'date.format': 'Formato de fecha inválido.',
      'date.min': 'Fecha menor a la permitida.',
      'date.max': 'Fecha mayor a la permitida.',
    }),
});
