import { useState, useRef, useCallback, useEffect, ChangeEvent } from 'react';

import KeyCodes from '../../interfaces/KeyCodes';

import {
  Container,
  InputContainer,
  StyledInput,
  Label,
  ErrorMessage,
} from './Input.styles';
import { InputProps } from './Input.types';

const Input = ({
  name,
  value,
  placeholder,
  onChange,
  error,
  errorMessage,
  type = 'text',
}: InputProps): JSX.Element => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isMouseActive, setIsMouseActive] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeMouseActive = useCallback(() => {
    setIsMouseActive(false);
  }, []);

  const handleClickOutside = useCallback(
    e => {
      if (
        isMouseActive &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        handleChangeMouseActive();
      }
    },
    [handleChangeMouseActive, isMouseActive],
  );

  const handleTypeEsc = useCallback(
    (e: KeyboardEvent) => {
      if (isMouseActive && e.keyCode === KeyCodes.ESCAPE) {
        handleChangeMouseActive();
      }
    },
    [handleChangeMouseActive, isMouseActive],
  );

  const containerClasses = `${isMouseEnter ? 'mouseEnter' : ''} ${
    isMouseActive ? 'mouseActive' : ''
  } ${error ? 'hasError' : ''}`;

  const labelClasses = `${isMouseActive ? 'mouseActive' : ''} ${
    value ? 'hasValue' : ''
  } ${error ? 'hasError' : ''}`;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleTypeEsc);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleTypeEsc);
    };
  }, [handleClickOutside, handleChangeMouseActive, handleTypeEsc]);

  return (
    <Container>
      <InputContainer
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        onClick={() => setIsMouseActive(true)}
        className={containerClasses}
        ref={wrapperRef}
      >
        {placeholder && <Label className={labelClasses}>{placeholder}</Label>}
        <StyledInput
          type={type}
          value={value}
          onChange={handleChange}
          name={name}
          ref={inputRef}
          autoComplete="off"
        />
      </InputContainer>
      {error && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Input;
