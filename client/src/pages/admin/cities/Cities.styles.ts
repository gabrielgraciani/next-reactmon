import styled from 'styled-components';
import { Button } from 'antd';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 5%;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 5rem 0 3rem;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin-bottom: 2rem;
`;

export { Container, Title, ButtonsContainer, StyledButton };
