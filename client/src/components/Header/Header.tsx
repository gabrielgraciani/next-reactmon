import { Link } from '../Link';

import {
  Container,
  HeaderContent,
  ProjectName,
  Menu,
  MenuItem,
  LoginButton,
  UserInformation,
  UserName,
  UserAvatar,
  UserImage,
} from './Header.styles';

export const Header = (): React.ReactElement => {
  const userLogged = false;

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

        {userLogged ? (
          <UserInformation>
            <UserName>Gabriel Graciani</UserName>
            <UserAvatar>
              <UserImage src="https://github.com/gabrielgraciani.png" />
            </UserAvatar>
          </UserInformation>
        ) : (
          <LoginButton href="/login">Log in / Sign up</LoginButton>
        )}
      </HeaderContent>
    </Container>
  );
};
