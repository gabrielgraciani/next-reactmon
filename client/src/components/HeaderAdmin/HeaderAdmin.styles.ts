import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';

import { Colors } from 'styles/colors';

const Container = styled.header`
  width: 100%;
  border-bottom: 0.1rem solid ${Colors.grayOpacity50};
  padding: 1rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProjectName = styled.h2`
  font-size: 1.6rem;
`;

const UserName = styled.span`
  font-size: 1.4rem;
`;

const BurgerIcon = styled(FiMenu)`
  cursor: pointer;
  font-size: 2.4rem;
`;

export { Container, ProjectName, UserName, BurgerIcon };
