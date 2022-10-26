import { UserRole } from 'src/types';

export interface RoutesProps {
  redirectPath?: string;
  children?: JSX.Element;
  role?: UserRole;
}
