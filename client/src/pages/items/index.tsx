import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { InfiniteData } from 'react-query';
import Head from 'next/head';

import { Banner } from 'components/Banner';
import { Item } from 'components/Item';
import { SearchField } from 'components/SearchField';

import { IItemsResponse } from 'interfaces/responses/ItemsResponse';

import { fetchItems, useInfiniteItems } from 'hooks/useInfiniteItems';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll';

import { Loading } from 'components/Loading';
import {
  Container,
  FilterContainer,
  CardsContainer,
  LoadingOrErrorContainer,
} from './Items.styles';

interface IItemsProps {
  itemsProps: InfiniteData<IItemsResponse>;
}

export default function Items({ itemsProps }: IItemsProps): JSX.Element {
  const [search, setSearch] = useState('');

  const {
    data,
    error,
    fetchNextPage,
    isLoading,
    isFetching,
    hasNextPage,
  } = useInfiniteItems({ initialData: itemsProps });

  useInfiniteScroll({
    isFetching,
    hasNextPage,
    handleLoadMore: fetchNextPage,
  });

  return (
    <>
      <Head>
        <title>Itens | Reactmon</title>
      </Head>

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
            diminuição de dados causados pelo oponente, recuperação de HP
            (health points), dentre outros.{' '}
          </p>
          <p>
            Além disso, as Berries também são muito utilizadas no competitivo e
            ao contrário dos itens que só possuem efeito em batalha elas podem
            ser utilizadas fora dela também.
          </p>
        </Banner>

        <FilterContainer>
          <SearchField
            value={search}
            placeholder="Pesquise um item"
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
            {data.pages.map(items =>
              items.data.map(item => <Item item={item} key={item.id} />),
            )}
          </CardsContainer>
        )}

        {!isLoading && isFetching && (
          <LoadingOrErrorContainer>
            <Loading />
          </LoadingOrErrorContainer>
        )}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const itemsProps = await fetchItems({ pageParam: 1 });

  const itemsPropsFormatted = {
    pageParams: [1],
    pages: [itemsProps],
  };

  return {
    props: { itemsProps: itemsPropsFormatted },
  };
};
