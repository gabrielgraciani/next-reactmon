import { Container } from './Button.styles';
import { IButtonProps } from './Button.types';

const Button = ({
  onClick,
  type = 'button',
  children,
}: IButtonProps): JSX.Element => {
  return (
    <Container onClick={onClick} type={type}>
      {children}
    </Container>
  );
};

export default Button;
