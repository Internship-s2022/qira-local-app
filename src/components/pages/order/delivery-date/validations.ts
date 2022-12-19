import { addBusinessDays, format } from 'date-fns';
import Joi from 'joi';

const formattedDate = format(addBusinessDays(new Date(), 5), 'MM-dd-yyyy');

export const DeliveryDateValidations = Joi.object({
  estimatedDeliveryDate: Joi.date().required().min(formattedDate).messages({
    'any.required': 'Campo requerido.',
    'date.base': 'Formato de fecha inválido.',
    'date.format': 'Formato de fecha inválido.',
    'date.min': 'Fecha mínima no aceptada.',
  }),
});
