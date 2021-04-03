import { FiSearch } from 'react-icons/fi';

import {
  Container,
  ContentContainer,
  Input,
  Button,
} from './SearchField.styles';
import { SearchFieldProps } from './SearchField.types';

const SearchField = ({
  value,
  placeholder,
  onChange,
}: SearchFieldProps): JSX.Element => {
  return (
    <Container>
      <ContentContainer>
        <Input
          active={!!value}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <Button>
          <FiSearch />
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default SearchField;
