import { useEffect, useState } from 'react';

import { Table } from 'components/Table';
import { ICity } from 'interfaces/City';

import { api } from 'services/api';
import { Container, Title, ButtonsContainer } from './Cities.styles';

export default function CitiesList(): JSX.Element {
  const [cities, setCities] = useState<ICity[]>([]);

  const handleFetch = async () => {
    const { data } = await api.get('/cities');
    setCities(data.data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

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

  return (
    <Container>
      <Title>Lista de cidades</Title>

      <ButtonsContainer />

      <Table columns={columns} isAdmin>
        {cities.map(item => (
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
              <Table.TdContainer onClick={() => {}}>
                <Table.EditIcon /> Editar
              </Table.TdContainer>
            </Table.Td>
            <Table.Td>
              <Table.TdContainer onClick={() => {}}>
                <Table.RemoveIcon /> Remover
              </Table.TdContainer>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table>
    </Container>
  );
}
