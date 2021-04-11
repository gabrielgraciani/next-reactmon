import styled from 'styled-components';
import { Colors } from '../../styles/colors';

const Container = styled.div`
  width: 100%;
`;

const FilterContainer = styled.div`
  padding: 0 5%;
  margin-top: 2rem;
`;

const CardsContainer = styled.section`
  width: 90%;
  max-width: 150rem;
  margin: 3rem auto 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-gap: 4rem 1.6rem;
`;

const LoadingOrErrorContainer = styled.div`
  margin: 3rem auto 4rem;
  text-align: center;
  color: ${Colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, FilterContainer, CardsContainer, LoadingOrErrorContainer };
