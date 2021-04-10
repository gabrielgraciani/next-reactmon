import Link from 'next/link';
import Head from 'next/head';

import { Card } from 'components/Card';
import { Banner } from 'components/Banner';
import { Item } from 'components/Item';
import { City } from 'components/City';

import ApplicationRoutes from 'config/ApplicationRoutes';
import { usePokemonsFeatured } from 'services/hooks/usePokemonsFeatured';

import { Loading } from 'components/Loading';
import {
  Container,
  CardsContainer,
  CardTitle,
  SeeAll,
  CardInfos,
  LoadingOrErrorContainer,
} from './Home.styles';

export default function Home(): JSX.Element {
  const {
    data: pokemonsFeatured,
    isLoading: isLoadingPokemonsFeatured,
    error: errorPokemonFeatured,
  } = usePokemonsFeatured();

  return (
    <>
      <Head>
        <title>Home | Reactmon</title>
      </Head>

      <Container>
        <Banner title="Sobre" image="/images/banners/banner-home.jpg">
          <p>
            É uma franquia de mídia que pertence a The Pokémon Company, tendo
            sido criada por Satoshi Tajiri em 1995. Ela é centrada em criaturas
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

        <CardInfos>
          <CardTitle>Pokémons do momento</CardTitle>
          <Link href={ApplicationRoutes.POKEDEX}>
            <SeeAll>Ver Todos</SeeAll>
          </Link>
        </CardInfos>

        {isLoadingPokemonsFeatured ? (
          <LoadingOrErrorContainer>
            <Loading />
          </LoadingOrErrorContainer>
        ) : errorPokemonFeatured ? (
          <LoadingOrErrorContainer>
            Ocorreu um erro ao carregar os pokémons, tente novamente mais tarde
          </LoadingOrErrorContainer>
        ) : (
          <CardsContainer>
            {pokemonsFeatured.map(pokemon => (
              <Card pokemon={pokemon} key={pokemon.id} />
            ))}
          </CardsContainer>
        )}

        <CardInfos>
          <CardTitle>Itens do momento</CardTitle>
          <Link href={ApplicationRoutes.ITEMS}>
            <SeeAll>Ver Todos</SeeAll>
          </Link>
        </CardInfos>

        <CardsContainer>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </CardsContainer>

        <CardInfos>
          <CardTitle>Cidades do momento</CardTitle>
          <Link href={ApplicationRoutes.CITIES}>
            <SeeAll>Ver Todos</SeeAll>
          </Link>
        </CardInfos>

        <CardsContainer>
          <City />
          <City />
          <City />
          <City />
          <City />
        </CardsContainer>
      </Container>
    </>
  );
}
