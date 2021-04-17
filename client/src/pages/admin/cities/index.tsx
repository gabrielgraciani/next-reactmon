import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

import { Table } from 'components/Table';
import { Loading } from 'components/Loading';

import { usePaginatedCities } from 'hooks/reactQuery/usePaginatedCities';

import { api } from 'services/api';

import { Pagination } from 'components/Pagination';
import { ApplicationRoutes } from 'config/ApplicationRoutes';
import {
  Container,
  Title,
  HeaderContainer,
  LoadingOrErrorContainer,
  StyledLink,
} from './CitiesAdminPage.styles';

export default function CitiesList(): JSX.Element {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { data, isLoading, error, isFetching } = usePaginatedCities({ page });

  const columns = [
    {
      title: 'ID',
      key: 'id',
    },
    {
      title: 'Nome',
      key: 'name',
    },
    {
      title: 'Descrição',
      key: 'description',
    },
    {
      title: 'Imagem',
      key: 'image',
    },
  ];

  const handleDeleteCity = async (id: string) => {
    const teste = await api.delete(`cities/${id}`);
    console.log('teste', teste);
  };

  return (
    <>
      <Head>
        <title>Listagem de Cidades | Reactmon</title>
      </Head>

      <Container>
        <HeaderContainer>
          <Title>Lista de cidades</Title>

          <Link href={ApplicationRoutes.ADMIN.CITIES.CREATE}>
            <StyledLink>Criar uma cidade</StyledLink>
          </Link>
        </HeaderContainer>

        {isLoading ? (
          <LoadingOrErrorContainer>
            <Loading />
          </LoadingOrErrorContainer>
        ) : error ? (
          <LoadingOrErrorContainer>
            Ocorreu um erro ao carregar as cidades. Tente novamente mais tarde
          </LoadingOrErrorContainer>
        ) : (
          <>
            <Table columns={columns} isAdmin>
              {data.cities.map(item => (
                <Table.Tr key={item.id}>
                  <Table.Td>{item.id}</Table.Td>
                  <Table.Td>{item.name}</Table.Td>
                  <Table.Td>{item.description}</Table.Td>
                  <Table.Td>
                    <Table.Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/files/${item.image}`}
                      alt={item.name}
                    />
                  </Table.Td>
                  <Table.Td>
                    <Table.TdContainer
                      onClick={() => {
                        router.push(
                          `${ApplicationRoutes.ADMIN.CITIES.EDIT}/${item.id}`,
                        );
                      }}
                    >
                      <Table.EditIcon /> Editar
                    </Table.TdContainer>
                  </Table.Td>
                  <Table.Td>
                    <Table.TdContainer
                      onClick={() => handleDeleteCity(item.id)}
                    >
                      <Table.RemoveIcon /> Remover
                    </Table.TdContainer>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table>

            <Pagination
              totalCountOfRegisters={data.totalCount}
              currentPage={page}
              onPageChange={setPage}
            />
          </>
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
