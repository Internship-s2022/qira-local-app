export interface FormValues {
  email: string;
  password: string;
}

export interface LoginModalProps {
  onConfirm: () => void;
  onClose: () => void;
}
