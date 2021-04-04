import Link from 'next/link';
import Head from 'next/head';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import {
  Container,
  Title,
  Form,
  FormItem,
  Text,
  CreateAccount,
} from './Register.styles';

export default function Register(): JSX.Element {
  return (
    <>
      <Head>
        <title>Register | Reactmon</title>
      </Head>

      <Container>
        <Title>Crie sua conta</Title>

        <Form>
          <FormItem>
            <Input name="name" label="Digite seu nome" />
          </FormItem>
          <FormItem>
            <Input name="email" type="email" label="Digite seu e-mail" />
          </FormItem>
          <FormItem>
            <Input name="password" label="Digite sua senha" type="password" />
          </FormItem>
          <FormItem>
            <Input
              name="password_confirmation"
              label="Confirme sua senha"
              type="password"
            />
          </FormItem>

          <FormItem>
            <Button type="submit" onClick={() => console.log('clicou')}>
              Entrar
            </Button>
          </FormItem>
        </Form>

        <Text>
          Já possui uma conta?
          <Link href="/login">
            <CreateAccount> Entre agora</CreateAccount>
          </Link>
        </Text>
      </Container>
    </>
  );
}
