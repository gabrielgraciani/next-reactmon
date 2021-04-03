import React, { cloneElement, useRef, useEffect } from 'react';

import { Container, PopoverContent, PopoverTriangle } from './Popover.styles';
import { PopoverTypes } from './Popover.types';

export const Popover = ({
  visible,
  children,
  content: Content,
  onClose,
  onVisibleChange,
}: PopoverTypes): JSX.Element => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleOpenPopover = () => {
    onVisibleChange();
  };

  const handleClick = (e: MouseEvent) => {
    const popover = e.target as HTMLDivElement;
    if (popoverRef.current && !popoverRef.current.contains(popover)) {
      onClose();
    }
  };

  useEffect(() => {
    if (visible) {
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }

    return null;
  });

  return (
    <Container ref={popoverRef}>
      {cloneElement(children, {
        onClick: handleOpenPopover,
        style: {
          cursor: 'pointer',
        },
      })}

      {visible && (
        <PopoverContent>
          <Content />
          <PopoverTriangle />
        </PopoverContent>
      )}
    </Container>
  );
};
