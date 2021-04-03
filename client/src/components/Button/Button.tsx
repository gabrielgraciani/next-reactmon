import { Container } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button = ({
  onClick,
  type = 'button',
  children,
}: ButtonProps): JSX.Element => {
  return (
    <Container onClick={onClick} type={type}>
      {children}
    </Container>
  );
};

export default Button;
