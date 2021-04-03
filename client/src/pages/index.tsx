import { Card } from 'components/Card';
import { Banner } from 'components/Banner';

import { Item } from 'components/Item';
import { City } from 'components/City';
import { Container, CardsContainer } from './Home.styles';

export default function Home(): React.ReactElement {
  return (
    <Container>
      <Banner title="Sobre" image="/images/banners/banner-home.jpg">
        <p>
          É uma franquia de mídia que pertence a The Pokémon Company, tendo sido
          criada por Satoshi Tajiri em 1995. Ela é centrada em criaturas
          ficcionais chamadas "Pokémon", que os seres humanos capturam e os
          treinam para lutarem um contra o outro como um esporte.
        </p>

        <p>
          A franquia começou com um par de jogos lançados para o Game Boy
          original, desenvolvidos pela Game Freak e publicados pela Nintendo.
          Atualmente, a franquia se estende em jogos, cartas colecionáveis,
          série de televisão, além de filmes, mangás e brinquedos. Pokémon é a
          segunda franquia de mídia de jogos mais bem sucedida e lucrativa do
          mundo, atrás da franquia de Mario que também pertence a Nintendo.
        </p>
      </Banner>
      <CardsContainer>
        <Card mainType="dark" types={['dark', 'grass']} />
        <Card mainType="grass" types={['grass', 'psychic']} />
        <Card mainType="psychic" types={['psychic', 'electric']} />
        <Card mainType="electric" types={['electric', 'normal']} />
        <Card mainType="normal" types={['normal', 'dark']} />
      </CardsContainer>

      <CardsContainer>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </CardsContainer>

      <CardsContainer>
        <City />
        <City />
        <City />
        <City />
        <City />
      </CardsContainer>
    </Container>
  );
}
