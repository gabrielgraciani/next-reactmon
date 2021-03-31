import { Link } from '../Link';

import {
  Container,
  HeaderContent,
  ProjectName,
  Menu,
  MenuItem,
} from './Header.styles';

export const Header = (): React.ReactElement => {
  return (
    <Container>
      <HeaderContent>
        <ProjectName>Reactmon</ProjectName>

        <Menu>
          <Link href="/" activeClassName="active">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href="/pokedex" activeClassName="active">
            <MenuItem>Pokédex</MenuItem>
          </Link>
          <Link href="/itens" activeClassName="active">
            <MenuItem>Itens</MenuItem>
          </Link>
          <Link href="/cities" activeClassName="active">
            <MenuItem>Cities</MenuItem>
          </Link>
        </Menu>
      </HeaderContent>
    </Container>
  );
};
