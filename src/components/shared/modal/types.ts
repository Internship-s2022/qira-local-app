export interface SharedModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
}
