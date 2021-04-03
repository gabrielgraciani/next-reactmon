import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import { Link } from '../Link';
import { Popover } from '../Popover';

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
  PopoverContent,
  PopoverContentItem,
  PopoverIconContainer,
} from './Header.styles';

const Header = (): JSX.Element => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const userLogged = false;

  const content = () => {
    return (
      <PopoverContent>
        <PopoverContentItem>Admin</PopoverContentItem>
        <PopoverContentItem>Sair</PopoverContentItem>
      </PopoverContent>
    );
  };

  const handleVisibleChange = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

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
          <Link href="/items" activeClassName="active">
            <MenuItem>Itens</MenuItem>
          </Link>
          <Link href="/cities" activeClassName="active">
            <MenuItem>Cidades</MenuItem>
          </Link>
        </Menu>

        {userLogged ? (
          <Popover
            visible={isPopoverVisible}
            content={content}
            onClose={() => setIsPopoverVisible(false)}
            onVisibleChange={handleVisibleChange}
          >
            <UserInformation>
              <UserName>Gabriel Graciani</UserName>
              <UserAvatar>
                <UserImage src="https://github.com/gabrielgraciani.png" />
              </UserAvatar>
              <PopoverIconContainer>
                {isPopoverVisible ? (
                  <FiChevronUp fontSize="1.8rem" />
                ) : (
                  <FiChevronDown fontSize="1.8rem" />
                )}
              </PopoverIconContainer>
            </UserInformation>
          </Popover>
        ) : (
          <LoginButton href="/login">Entrar</LoginButton>
        )}
      </HeaderContent>
    </Container>
  );
};

export default Header;
