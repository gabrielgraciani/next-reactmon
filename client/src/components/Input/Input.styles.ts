import { Colors } from 'styles/colors';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  border: 0.1rem solid ${Colors.grayOpacity50};
  border-radius: 0.4rem;
  position: relative;
  transition: border-color 0.15s ease;

  &.mouseEnter {
    border-color: ${Colors.white};
  }
  &.mouseActive {
    border-color: ${Colors.lightBlue};
  }
  &.hasError {
    border-color: ${Colors.red};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  outline: 0;
  border: 0;
  background: transparent;
  font-size: 1.4rem;
  padding: 1.5rem 0.8rem;
  color: ${Colors.white};

  :-webkit-autofill {
    box-shadow: 0 0 0 100rem ${Colors.darkGray} inset;
    color: ${Colors.white};
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translate(0%, -50%);
  pointer-events: none;
  background: ${Colors.darkGray};
  transition: all 0.15s ease;
  font-size: 1.4rem;
  padding-right: 0.5rem;

  &.mouseActive {
    top: 0%;
    color: ${Colors.lightBlue};
    font-size: 1.1rem;
  }
  &.hasValue {
    top: 0%;
    font-size: 1.1rem;
  }
  &.hasError {
    color: ${Colors.red};
  }

  @media (max-width: 500px) {
    font-size: 1.3rem;
  }
`;

const ErrorMessage = styled.div`
  color: ${Colors.red};
  font-size: 1.2rem;
  margin-top: 0.3rem;
`;

export { Container, InputContainer, StyledInput, Label, ErrorMessage };
