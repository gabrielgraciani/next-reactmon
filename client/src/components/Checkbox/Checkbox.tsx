import { Container, Input } from './Checkbox.styles';
import { ICheckboxProps } from './Checkbox.types';

const Checkbox = ({
  checked,
  name,
  label,
  onChange,
  ...rest
}: ICheckboxProps): JSX.Element => {
  return (
    <Container id={name}>
      <Input type="checkbox" id={name} name={name} onChange={onChange} />
      {label}
    </Container>
  );
};

export default Checkbox;
