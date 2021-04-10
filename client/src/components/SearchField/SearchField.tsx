import { FiSearch } from 'react-icons/fi';

import {
  Container,
  ContentContainer,
  Input,
  Button,
} from './SearchField.styles';
import { ISearchFieldProps } from './SearchField.types';

const SearchField = ({
  value,
  placeholder,
  onChange,
}: ISearchFieldProps): JSX.Element => {
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
