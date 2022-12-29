export interface SignUpFormValues {
  email: string;
  password: string;
  repeatPassword: string;
  codeArea: string;
  phoneNumber: string;
  businessName: string;
  cuit: string;
  ivaCondition: string;
  province: string;
  city: string;
  zipCode: string;
  street: string;
}

export interface formattedUser {
  businessName: string;
  cuit: string;
  ivaCondition: string;
  address: {
    province: string;
    city: string;
    zipCode: string;
    street: string;
  };
  phoneNumber: string;
  email: string;
  password: string;
}
