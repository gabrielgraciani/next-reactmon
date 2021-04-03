import { ElementType, ReactElement } from 'react';

export interface PopoverTypes {
  children: ReactElement;
  content: ElementType;
  onClose: () => void;
  visible: boolean;
  onVisibleChange: () => void;
}
