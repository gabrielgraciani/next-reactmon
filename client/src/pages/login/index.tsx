import Link from 'next/link';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Form } from 'components/Form';

import ApplicationRoutes from 'config/ApplicationRoutes';

import { Container, Title, Text, CreateAccount } from './Login.styles';
import { ISignInFormData } from './Login.types';

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Login(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<ISignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<ISignInFormData> = async values => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Login | Reactmon</title>
      </Head>

      <Container>
        <Title>Log in</Title>

        <Form onSubmit={handleSubmit(handleSignIn)}>
          <Form.FormItem>
            <Input
              name="email"
              type="email"
              label="Digite seu e-mail"
              {...register('email')}
              error={errors.email}
            />
          </Form.FormItem>
          <Form.FormItem>
            <Input
              name="password"
              label="Digite sua senha"
              type="password"
              {...register('password')}
              error={errors.password}
            />
          </Form.FormItem>

          <Form.FormItem>
            <Button type="submit">Entrar</Button>
          </Form.FormItem>
        </Form>

        <Text>
          Não possui uma conta?
          <Link href={ApplicationRoutes.REGISTER}>
            <CreateAccount> Crie agora</CreateAccount>
          </Link>
        </Text>
      </Container>
    </>
  );
}
