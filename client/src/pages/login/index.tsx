import { useState } from 'react';
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
} from './Login.styles';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head>
        <title>Login | Reactmon</title>
      </Head>

      <Container>
        <Title>Log in</Title>

        <Form>
          <FormItem>
            <Input
              name="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={val => setEmail(val)}
            />
          </FormItem>
          <FormItem>
            <Input
              name="password"
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={val => setPassword(val)}
            />
          </FormItem>

          <FormItem>
            <Button type="submit" onClick={() => console.log('clicou')}>
              Entrar
            </Button>
          </FormItem>
        </Form>

        <Text>
          Não possui uma conta?{' '}
          <Link href="/register">
            <CreateAccount>Crie agora</CreateAccount>
          </Link>
        </Text>
      </Container>
    </>
  );
}
