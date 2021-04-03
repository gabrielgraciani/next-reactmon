import { useState } from 'react';
import { Card } from 'components/Card';
import { Banner } from 'components/Banner';

import { SearchField } from 'components/SearchField';
import { Container, FilterContainer, CardsContainer } from './Pokedex.styles';

export default function Pokedex(): JSX.Element {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Banner title="Pokédex" image="/images/banners/banner-pokedex.png">
        <p>
          A franquia Pokémon gira em torno de 890 espécies fictícias de monstros
          colecionáveis, cada um com designs e habilidades únicas. Os projetos
          para a multiplicidade de espécies podem inspirar-se em qualquer coisa
          como animais, plantas, criaturas mitológicas e até objetos inanimados.
          Muitos Pokémon são capazes de evoluir para espécies mais poderosas,
          enquanto outros podem sofrer mudanças de forma e obter resultados
          semelhantes.
        </p>

        <p>
          A vasta gama de criaturas é comumente dividida em "gerações", com cada
          divisão englobando principalmente novos títulos no série de jogos
          eletrônicos principais e muitas vezes uma mudança da plataforma
          portátil. Devido ao grande número de Pokémon, a listagem de cada
          espécie é dividida é apenas da primeira geração.
        </p>
      </Banner>

      <FilterContainer>
        <SearchField
          value={search}
          placeholder="Pesquise um pokemon"
          onChange={e => setSearch(e.target.value)}
        />
      </FilterContainer>

      <CardsContainer>
        <Card mainType="dark" types={['dark', 'grass']} />
        <Card mainType="grass" types={['grass', 'psychic']} />
        <Card mainType="psychic" types={['psychic', 'electric']} />
        <Card mainType="electric" types={['electric', 'normal']} />
        <Card mainType="normal" types={['normal', 'dark']} />
      </CardsContainer>
    </Container>
  );
}
