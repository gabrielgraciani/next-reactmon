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
} from './Register.styles';

export default function Register(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Head>
        <title>Register | Reactmon</title>
      </Head>

      <Container>
        <Title>Crie sua conta</Title>

        <Form>
          <FormItem>
            <Input
              name="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={val => setName(val)}
            />
          </FormItem>
          <FormItem>
            <Input
              name="email"
              type="email"
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
            <Input
              name="password_confirmation"
              placeholder="Confirme sua senha"
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
          Já possui uma conta?
          <Link href="/login">
            <CreateAccount> Entre agora</CreateAccount>
          </Link>
        </Text>
      </Container>
    </>
  );
}
