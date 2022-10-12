export interface SharedModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
  modalType: ModalTypes;
}
export enum ModalTypes {
  BASIC_MODAL = 'BASIC_MODAL',
  UPLOAD_IMAGE = 'UPLOAD_IMAGE',
}
