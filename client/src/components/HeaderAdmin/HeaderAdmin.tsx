import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Drawer } from 'components/Drawer';

import { Container, ProjectName, UserName } from './HeaderAdmin.styles';

const HeaderAdmin = (): JSX.Element => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const contentDrawer = () => {
    return <div>conteudo</div>;
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
