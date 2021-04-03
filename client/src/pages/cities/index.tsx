import { useState } from 'react';
import { Banner } from 'components/Banner';
import { City } from 'components/City';

import { SearchField } from 'components/SearchField';
import { Container, FilterContainer, CardsContainer } from './Cities.styles';

export default function Cities(): JSX.Element {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Banner title="Cidades" image="/images/banners/banner-cities.png">
        <p>
          Muitas regiões foram descritas na franquia de jogos eletrônicos,
          desenhos animados e quadrinhos Pokémon. Cada uma das gerações de RPGs
          Originais de Pokémon introduziu uma nova Região. Há ainda, algumas
          Regiões introduzidas em games Spin-offs, como Pokémon Ranger, Pokémon
          Mystery Dungeon e principalmente Pokémon Colosseum e Pokémon XD. Nos
          jogos, não é possível acessar outras Regiões de outros games, exceto
          Kanto, acessível em Pokémon Gold, Silver & Crystal após a vitória
          sobre a Elite dos Quatro.
        </p>

        <p>
          Todas as Regiões onde se passa um RPG Original são baseadas em regiões
          reais do Japão e a região de Orre também é baseada em uma área do
          Japão. As regiões também podem ser consideradas como países, pois,
          embora não haja significativa diferença cultural entre os moradores da
          diferentes regiões, nas versões em inglês dos jogos Pokémon Gold e
          Pokémon Silver, o mapa refere-se a Kanto e Johto como countrys.
        </p>
      </Banner>

      <FilterContainer>
        <SearchField
          value={search}
          placeholder="Pesquise um item"
          onChange={e => setSearch(e.target.value)}
        />
      </FilterContainer>

      <CardsContainer>
        <City />
        <City />
        <City />
        <City />
      </CardsContainer>
    </Container>
  );
}
