import { Table } from 'antd';
import ApplicationRoutes from 'config/ApplicationRoutes';
import Link from 'next/link';
import { useState } from 'react';

import {
  Container,
  Title,
  ButtonsContainer,
  StyledButton,
} from './Cities.styles';

interface IDataType {
  key: React.Key;
  name: string;
  description: string;
}

export default function CitiesList(): JSX.Element {
  const [selectedRows, setSelectedRows] = useState([]);

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

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRowsAntd: IDataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRowsAntd: ',
        selectedRowsAntd,
      );
      setSelectedRows(selectedRowsAntd);
    },
  };

  const buttonDisabled = selectedRows.length === 0;
  return (
    <Container>
      <Title>Lista de cidades</Title>

      <ButtonsContainer>
        <StyledButton type="primary" danger disabled={buttonDisabled}>
          Delete Selected rows
        </StyledButton>

        <Link href={ApplicationRoutes.ADMIN.CITIES.CREATE}>
          <StyledButton type="primary">Create new city</StyledButton>
        </Link>
      </ButtonsContainer>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 10 }}
      />
    </Container>
  );
}
