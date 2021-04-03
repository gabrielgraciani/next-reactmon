import {
  Container,
  ImageContainer,
  Image,
  Content,
  Name,
  Description,
  Footer,
} from './Item.styles';

const Item = (): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/images/dratini.png" alt="" />
      </ImageContainer>
      <Content>
        <Name>Max Revive</Name>
        <Description>
          Item que pode ser utilizado tanto fora quanto dentro de batalhas.
        </Description>
      </Content>
      <Footer>Recupera um pokémon derrotado e o deixa com HP no máximo</Footer>
    </Container>
  );
};

export default Item;
