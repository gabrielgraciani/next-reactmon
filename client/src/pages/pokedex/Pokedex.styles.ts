import styled from 'styled-components';

const Container = styled.div``;

const FilterContainer = styled.div`
  padding: 0 5%;
  margin-top: 2rem;
`;

const CardsContainer = styled.div`
  width: 90%;
  max-width: 150rem;
  margin: 3rem auto 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  grid-gap: 4rem 1.6rem;
`;

export { Container, FilterContainer, CardsContainer };
