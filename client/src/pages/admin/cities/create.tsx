import ApplicationRoutes from 'config/ApplicationRoutes';
import Link from 'next/link';

import { Form } from 'components/Form';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';

import {
  Container,
  Title,
  ButtonsContainer,
  StyledButton,
} from './Cities.styles';

export default function CreateCity(): JSX.Element {
  return (
    <Container>
      <Title>Crie uma nova cidade</Title>

      <ButtonsContainer>
        <Link href={ApplicationRoutes.ADMIN.CITIES.LIST}>
          <StyledButton>Voltar</StyledButton>
        </Link>
      </ButtonsContainer>

      <Form>
        <Form.FormItem>
          <Input name="name" label="Digite o nome da cidade" />
        </Form.FormItem>
        <Form.FormItem>
          <Textarea name="description" label="Digite a descrição da cidade" />
        </Form.FormItem>

        <Form.FormItem>
          <Button type="submit">Criar</Button>
        </Form.FormItem>
      </Form>
    </Container>
  );
}
