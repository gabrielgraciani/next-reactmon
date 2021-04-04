import Link from 'next/link';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function Login(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
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
          <FormItem>
            <Input
              name="email"
              type="email"
              label="Digite seu e-mail"
              {...register('email')}
              error={errors.email}
            />
          </FormItem>
          <FormItem>
            <Input
              name="password"
              label="Digite sua senha"
              type="password"
              {...register('password')}
              error={errors.password}
            />
          </FormItem>

          <FormItem>
            <Button type="submit">Entrar</Button>
          </FormItem>
        </Form>

        <Text>
          Não possui uma conta?
          <Link href="/register">
            <CreateAccount> Crie agora</CreateAccount>
          </Link>
        </Text>
      </Container>
    </>
  );
}
