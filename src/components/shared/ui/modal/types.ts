export interface SharedModalProps {
  open: boolean;
  onClose: () => void;
  children?: JSX.Element;
  modalType: ModalTypes;
  onConfirm?: () => void;
}
export enum ModalTypes {
  BASIC_MODAL = 'BASIC_MODAL',
  IMAGE_MODAL = 'IMAGE_MODAL',
  PDF_MODAL = 'PDF_MODAL',
}
