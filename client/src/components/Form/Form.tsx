import { Container, FormItem } from './Form.styles';
import { FormProps } from './Form.types';

const Form = ({ children, ...rest }: FormProps): JSX.Element => {
  return <Container {...rest}>{children}</Container>;
};

Form.FormItem = FormItem;

export default Form;
