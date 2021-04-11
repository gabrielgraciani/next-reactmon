import { useState } from 'react';
import Head from 'next/head';

import { Card } from 'components/Card';
import { Banner } from 'components/Banner';

import { useInfinitePokemons } from 'services/hooks/useInfinitePokemons';

import { SearchField } from 'components/SearchField';
import { Loading } from 'components/Loading';
import {
  Container,
  FilterContainer,
  CardsContainer,
  LoadingOrErrorContainer,
} from './Pokedex.styles';

export default function Pokedex(): JSX.Element {
  const [search, setSearch] = useState('');

  const {
    data,
    error,
    fetchNextPage,
    isLoading,
    isFetching,
  } = useInfinitePokemons();

  return (
    <>
      <Head>
        <title>Pokédex | Reactmon</title>
      </Head>

      <Container>
        <Banner title="Pokédex" image="/images/banners/banner-pokedex.png">
          <p>
            A franquia Pokémon gira em torno de 890 espécies fictícias de
            monstros colecionáveis, cada um com designs e habilidades únicas. Os
            projetos para a multiplicidade de espécies podem inspirar-se em
            qualquer coisa como animais, plantas, criaturas mitológicas e até
            objetos inanimados. Muitos Pokémon são capazes de evoluir para
            espécies mais poderosas, enquanto outros podem sofrer mudanças de
            forma e obter resultados semelhantes.
          </p>

          <p>
            A vasta gama de criaturas é comumente dividida em "gerações", com
            cada divisão englobando principalmente novos títulos no série de
            jogos eletrônicos principais e muitas vezes uma mudança da
            plataforma portátil. Devido ao grande número de Pokémon, a listagem
            de cada espécie é dividida é apenas da primeira geração.
          </p>
        </Banner>

        <FilterContainer>
          <SearchField
            value={search}
            placeholder="Pesquise um pokemon"
            onChange={e => setSearch(e.target.value)}
          />
        </FilterContainer>

        {isLoading ? (
          <LoadingOrErrorContainer>
            <Loading />
          </LoadingOrErrorContainer>
        ) : error ? (
          <LoadingOrErrorContainer>
            Ocorreu um erro ao carregar os pokémons. Tente novamente mais tarde
          </LoadingOrErrorContainer>
        ) : (
          <CardsContainer>
            {data.pages.map(pokemons =>
              pokemons.data.map(pokemon => (
                <Card pokemon={pokemon} key={pokemon.id} />
              )),
            )}
          </CardsContainer>
        )}

        {!isLoading && isFetching && (
          <LoadingOrErrorContainer>
            <Loading />
          </LoadingOrErrorContainer>
        )}

        <button
          style={{ marginLeft: 200 }}
          type="button"
          onClick={fetchNextPage}
        >
          mais
        </button>
      </Container>
    </>
  );
}
