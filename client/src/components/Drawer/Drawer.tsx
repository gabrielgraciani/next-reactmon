import { cloneElement, useRef, useEffect } from 'react';
import { useTransition } from 'react-spring';

import { DrawerProps } from './Drawer.types';
import { Container, DrawerContent, CloseIcon } from './Drawer.styles';

const Drawer = ({
  visible,
  children,
  content: Content,
  onClose,
  onVisibleChange,
}: DrawerProps): JSX.Element => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleOpenDrawer = () => {
    onVisibleChange();
  };

  const handleClick = (e: MouseEvent) => {
    const drawer = e.target as HTMLDivElement;
    if (drawerRef.current && !drawerRef.current.contains(drawer)) {
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

  const drawerWithTransition = useTransition(visible, {
    from: { right: -260 },
    enter: { right: 0 },
    leave: { right: -260 },
  });

  return (
    <Container ref={drawerRef}>
      {cloneElement(children, {
        onClick: handleOpenDrawer,
        style: {
          cursor: 'pointer',
        },
      })}

      {drawerWithTransition(
        (style, item) =>
          item && (
            <DrawerContent style={style}>
              <CloseIcon onClick={onClose} />
              <Content />
            </DrawerContent>
          ),
      )}
    </Container>
  );
};

export default Drawer;
