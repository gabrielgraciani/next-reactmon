import { Table } from 'antd';

import { Container, Title } from './Cities.styles';

export default function CitiesList(): JSX.Element {
  const dataSource = [
    {
      key: '1',
      name: 'Victory Road',
      description: '10 Downing Street',
    },
    {
      key: '2',
      name: 'Vermillion',
      description: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
  ];
  return (
    <Container>
      <Title>Lista de cidades</Title>
      <Table columns={columns} dataSource={dataSource} />
    </Container>
  );
}
