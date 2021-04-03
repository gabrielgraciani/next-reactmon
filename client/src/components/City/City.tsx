import {
  Container,
  ImageContainer,
  Image,
  Svg,
  SvgPath,
  Content,
  Name,
  Description,
} from './City.styles';

const City = (): JSX.Element => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/images/victory_road.png" alt="" />

        <Svg
          className="wavy"
          viewBox="0 0 250 250"
          preserveAspectRatio="xMinYMin meet"
        >
          <SvgPath d="M0,25 C50,75 175,0 250,40 L250,00 L0,0 Z" />
        </Svg>
      </ImageContainer>

      <Content>
        <Name>Victory Road</Name>
        <Description>
          O Caminho da Vitória é a última caverna antes da Liga Pokémon,
          portanto, a mais perigosa. Muitos treinadores experientes e veteranos
          vem treinar nessa caverna.
        </Description>
      </Content>
    </Container>
  );
};

export default City;
