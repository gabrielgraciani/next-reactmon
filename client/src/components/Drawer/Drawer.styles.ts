import { FiX } from 'react-icons/fi';
import styled from 'styled-components';

import { Colors } from 'styles/colors';
import { DrawerStyledProps } from './Drawer.types';

const Container = styled.div`
  position: relative;
`;

const DrawerContent = styled.div<DrawerStyledProps>`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: ${props => (props.isOpen ? '25rem' : '0')};
  background: ${Colors.white};
  box-shadow: 0 0 10px ${Colors.white};
  color: ${Colors.darkGray};
  padding: 5rem 1.5rem;
`;

const CloseIcon = styled(FiX)`
  position: absolute;
  top: 1rem;
  right: 5%;
  font-size: 2.4rem;
  cursor: pointer;
`;

export { Container, DrawerContent, CloseIcon };
