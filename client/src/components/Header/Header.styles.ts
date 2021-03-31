import { Colors } from 'styles/colors';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  border-bottom: 0.1rem solid ${Colors.lightGray};
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
`;

const MenuItem = styled.a`
  display: inline-block;
  font-size: 1.4rem;
  line-height: 8rem;
  cursor: pointer;
  position: relative;
  color: ${Colors.gray500};

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

export { Container, HeaderContent, ProjectName, Menu, MenuItem };