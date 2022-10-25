export enum IvaCondition {
  registeredResponsible = 'RESPONSABLE_INSCRIPTO',
  selfEmployment = 'MONOTRIBUTO',
  exempt = 'EXENTO',
  finalConsumer = 'CONSUMIDOR_FINAL',
}

export enum UserRole {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  CLIENT = 'CLIENT',
}

export enum Currency {
  dollar = 'DOLLAR',
  peso = 'PESO',
}

export interface S3File {
  key: string;
  url: string;
}
