import { Colors } from 'styles/colors';
import styled from 'styled-components';

const Container = styled.button`
  width: 100%;
  border: 1px solid ${Colors.white};
  border-radius: 0.4rem;
  background: transparent;
  padding: 1.5rem 2rem;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;

export { Container };
