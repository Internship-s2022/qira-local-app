export interface SharedModalProps {
  open: boolean;
  onClose: () => void;
  children?: JSX.Element;
  modalType: ModalTypes;
  onConfirm?: () => void;
}
export enum ModalTypes {
  BASIC_MODAL = 'BASIC_MODAL',
  UPLOAD_IMAGE = 'UPLOAD_IMAGE',
  UPLOAD_PDF = 'UPLOAD_PDF',
}

export interface CustomFile extends File {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}
