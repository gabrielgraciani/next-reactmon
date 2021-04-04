import {
  Container,
  ProjectName,
  UserName,
  BurgerIcon,
} from './HeaderAdmin.styles';

const HeaderAdmin = (): JSX.Element => {
  return (
    <Container>
      <ProjectName>Reactmon</ProjectName>

      <UserName>
        Olá, <strong>Gabriel Graciani</strong>
      </UserName>

      <BurgerIcon />
    </Container>
  );
};

export default HeaderAdmin;
