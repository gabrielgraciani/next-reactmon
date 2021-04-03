import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

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
} from './Header.styles';

export const Header = (): React.ReactElement => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const userLogged = true;

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
          <Link href="/itens" activeClassName="active">
            <MenuItem>Itens</MenuItem>
          </Link>
          <Link href="/cities" activeClassName="active">
            <MenuItem>Cities</MenuItem>
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
              <FiChevronDown fontSize="1.8rem" />
            </UserInformation>
          </Popover>
        ) : (
          <LoginButton href="/login">Log in / Sign up</LoginButton>
        )}
      </HeaderContent>
    </Container>
  );
};
