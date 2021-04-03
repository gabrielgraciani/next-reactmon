import { useState } from 'react';
import { Banner } from 'components/Banner';
import { Item } from 'components/Item';

import { SearchField } from 'components/SearchField';
import { Container, FilterContainer, CardsContainer } from './Items.styles';

export default function Items(): JSX.Element {
  const [search, setSearch] = useState('');
  return (
    <Container>
      <Banner title="Itens" image="/images/banners/banner-items.jpg">
        <p>
          No universo de Pokémon existem diversos itens a nossa disposição e
          cada um possui a sua funcionalidade e importância.
        </p>
        <p>
          Os <b>Held Itens</b> são itens que podem ser segurados por seus
          Pokémon e alguns são considerados os mais importantes para quem joga
          na modalidade competitiva, proporcionando diversas vantagens ao
          Pokémon portador, seja aumento dos atributos ofensivos e defensivos,
          diminuição de dados causados pelo oponente, recuperação de HP (health
          points), dentre outros.{' '}
        </p>
        <p>
          Além disso, as Berries também são muito utilizadas no competitivo e ao
          contrário dos itens que só possuem efeito em batalha elas podem ser
          utilizadas fora dela também.
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </CardsContainer>
    </Container>
  );
}
