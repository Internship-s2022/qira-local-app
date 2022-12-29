import { ModalTypes } from 'src/redux/modal/types';

export interface SharedModalProps {
  open: boolean;
  onClose: () => void;
  children?: JSX.Element;
  modalType: ModalTypes;
  onConfirm?: () => void;
}
export interface CustomFile extends File {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface Files {
  files: CustomFile[];
}
