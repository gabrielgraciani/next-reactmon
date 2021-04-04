import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import NextLink from 'next/link';

import ApplicationRoutes from 'config/ApplicationRoutes';

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
        <NextLink href={ApplicationRoutes.ADMIN.ROOT}>
          <PopoverContentItem>Admin</PopoverContentItem>
        </NextLink>
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
          <Link href={ApplicationRoutes.ROOT} activeClassName="active">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href={ApplicationRoutes.POKEDEX} activeClassName="active">
            <MenuItem>Pokédex</MenuItem>
          </Link>
          <Link href={ApplicationRoutes.ITEMS} activeClassName="active">
            <MenuItem>Itens</MenuItem>
          </Link>
          <Link href={ApplicationRoutes.CITIES} activeClassName="active">
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
          <NextLink href={ApplicationRoutes.LOGIN}>
            <LoginButton>Entrar</LoginButton>
          </NextLink>
        )}
      </HeaderContent>
    </Container>
  );
};

export default Header;
