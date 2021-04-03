import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.div`
  position: relative;
  z-index: 9;
`;

const PopoverContent = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  background: ${Colors.white};
  color: ${Colors.black};
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  user-select: none;
  filter: drop-shadow(0px 0px 4px ${Colors.white});
`;

const PopoverTriangle = styled.div`
  position: absolute;
  top: -0.6rem;
  right: 1rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0.7rem 0.7rem 0.7rem;
  border-color: transparent transparent ${Colors.white} transparent;
`;

export { Container, PopoverContent, PopoverTriangle };
