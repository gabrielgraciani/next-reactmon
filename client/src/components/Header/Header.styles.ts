import { Colors } from 'styles/colors';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  border-bottom: 0.1rem solid ${Colors.grayOpacity50};
  padding: 0 5%;
  height: 8rem;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ProjectName = styled.h2`
  font-size: 2.5rem;
`;

const Menu = styled.nav`
  margin-left: 5rem;
  height: 8rem;
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const MenuItem = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 8rem;
  cursor: pointer;
  position: relative;
  color: ${Colors.lightGray};

  & + a {
    margin-left: 2rem;
  }

  &.active {
    color: ${Colors.white};

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.3rem;
      background: ${Colors.white};
    }
  }
`;

const LoginButton = styled.a`
  font-size: 1.4rem;
`;

const UserInformation = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const UserName = styled.span`
  font-size: 1.4rem;
`;

const UserAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin: 0 1rem;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const PopoverContent = styled.div``;

const PopoverContentItem = styled.a`
  display: block;
  font-size: 1.4rem;

  & + a {
    margin-top: 1rem;
  }
`;

export {
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
};
