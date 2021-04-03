import styled from 'styled-components';
import { Colors } from '../../styles/colors';

import { SearchFieldStyledProps } from './SearchField.types';

const Container = styled.div`
  display: flex;
`;
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${Colors.mediumGray};
  border-radius: 4rem;
  padding: 1.2rem;

  &:hover input {
    width: 25rem;
    padding-left: 1rem;
  }
`;

const Input = styled.input<SearchFieldStyledProps>`
  width: ${props => (props.active ? '25rem' : '0')};
  padding: ${props => (props.active ? '0 0 0 1rem' : '0')};
  transition: all 0.4s ease;
  border: none;
  background: none;
  outline: none;
  color: ${Colors.white};
  font-size: 1.6rem;

  &:focus {
    width: 25rem;
    padding-left: 1rem;
  }
`;

const Button = styled.button`
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, ContentContainer, Input, Button };
