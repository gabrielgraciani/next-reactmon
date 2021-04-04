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
} from './Register.styles';
import { RegisterFormData } from './Register.types';

const registerFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function Register(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
  });

  const { errors } = formState;

  const handleRegister: SubmitHandler<RegisterFormData> = async values => {
    console.log(values);
  };
  return (
    <>
      <Head>
        <title>Register | Reactmon</title>
      </Head>

      <Container>
        <Title>Crie sua conta</Title>

        <Form onSubmit={handleSubmit(handleRegister)}>
          <FormItem>
            <Input
              name="name"
              label="Digite seu nome"
              {...register('name')}
              error={errors.name}
            />
          </FormItem>
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
            <Input
              name="password_confirmation"
              label="Confirme sua senha"
              type="password"
              {...register('password_confirmation')}
              error={errors.password_confirmation}
            />
          </FormItem>

          <FormItem>
            <Button type="submit">Criar</Button>
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
