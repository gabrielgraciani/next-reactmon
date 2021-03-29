import styled from 'styled-components';

const Container = styled.div``;

const CardsContainer = styled.div`
  width: 90%;
  max-width: 150rem;
  margin: 6rem auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
  grid-gap: 4rem 1.6rem;
`;

export { Container, CardsContainer };
