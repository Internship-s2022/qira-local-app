export interface SignUpModalProps {
  onConfirm: () => void;
}

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
