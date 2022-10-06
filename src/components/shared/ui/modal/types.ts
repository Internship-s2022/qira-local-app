export interface SharedModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}
