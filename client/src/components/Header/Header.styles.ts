import { Colors } from 'styles/colors';
import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  border-bottom: 0.1rem solid ${Colors.lightGray};
  padding: 3rem 5%;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ProjectName = styled.h2``;

const Menu = styled.nav`
  margin-left: 5rem;
`;

const MenuItem = styled.a`
  & + a {
    margin-left: 2rem;
  }
`;

export { Container, HeaderContent, ProjectName, Menu, MenuItem };
