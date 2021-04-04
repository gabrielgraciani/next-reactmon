import { ReactElement, ElementType } from 'react';

export interface DrawerProps {
  children: ReactElement;
  content: ElementType;
  onClose: () => void;
  visible: boolean;
  onVisibleChange: () => void;
}
