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
          <MenuItem href="">Home</MenuItem>
          <MenuItem href="">Pokedex</MenuItem>
        </Menu>
      </HeaderContent>
    </Container>
  );
};
