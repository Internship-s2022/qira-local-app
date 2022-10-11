export interface SharedModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
  modalType: modalTypes;
}
export enum modalTypes {
  BASIC_MODAL = 'BASIC_MODAL',
  IMAGE_MODAL = 'IMAGE_MODAL',
}
