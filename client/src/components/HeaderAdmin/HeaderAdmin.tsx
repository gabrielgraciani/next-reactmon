import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

import { Drawer } from 'components/Drawer';

import ApplicationRoutes from 'config/ApplicationRoutes';

import {
  Container,
  ProjectName,
  UserName,
  DrawerContent,
  DrawerItem,
} from './HeaderAdmin.styles';

const HeaderAdmin = (): JSX.Element => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const contentDrawer = () => {
    return (
      <DrawerContent>
        <Link href={ApplicationRoutes.ADMIN.ROOT}>
          <DrawerItem>Gerenciar Pokémons</DrawerItem>
        </Link>
        <Link href={ApplicationRoutes.ADMIN.ITEMS}>
          <DrawerItem>Gerenciar Itens</DrawerItem>
        </Link>
        <Link href={ApplicationRoutes.ADMIN.CITIES.LIST}>
          <DrawerItem>Gerenciar Cidades</DrawerItem>
        </Link>
        <Link href={ApplicationRoutes.ROOT}>
          <DrawerItem>Voltar para o início</DrawerItem>
        </Link>
      </DrawerContent>
    );
  };

  const handleVisibleChange = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <Container>
      <ProjectName>Reactmon</ProjectName>

      <UserName>
        Olá, <strong>Gabriel Graciani</strong>
      </UserName>

      <Drawer
        visible={isDrawerVisible}
        content={contentDrawer}
        onClose={() => setIsDrawerVisible(false)}
        onVisibleChange={handleVisibleChange}
      >
        <FiMenu fontSize="2.4rem" />
      </Drawer>
    </Container>
  );
};

export default HeaderAdmin;
