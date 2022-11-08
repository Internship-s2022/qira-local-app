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
  DOLLAR = 'DOLLAR',
  PESO = 'PESO',
}

export interface S3File {
  key: string;
  url: string;
}

export interface FileToSend {
  base64: string;
  name: string;
  type: string;
  isNew: boolean;
}
