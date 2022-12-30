import { IvaCondition } from 'src/types';

export const formatIvaConditionsText = (iva: IvaCondition) => {
  let ivaCondition: string;
  switch (iva) {
    case IvaCondition.exempt:
      ivaCondition = 'Exento';
      break;
    case IvaCondition.finalConsumer:
      ivaCondition = 'Consumidor Final';
      break;
    case IvaCondition.registeredResponsible:
      ivaCondition = 'Responsable Inscripto';
      break;
    case IvaCondition.selfEmployment:
      ivaCondition = 'Monotributista';
      break;
    default:
      break;
  }
  return ivaCondition;
};
