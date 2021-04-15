import { withAuth } from 'helpers/withAuth';

import { Container, Title, ButtonsContainer } from './Cities.styles';

export default function CitiesList(): JSX.Element {
  return (
    <Container>
      <Title>Lista de cidades</Title>

      <ButtonsContainer />
    </Container>
  );
}

export const getServerSideProps = withAuth;
