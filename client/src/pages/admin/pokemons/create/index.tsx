import Head from 'next/head';
import Link from 'next/link';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { ApplicationRoutes } from 'config/ApplicationRoutes';

import { Form } from 'components/Form';
import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { useToast } from 'contexts/ToastContext';

import { useCreatePokemon } from 'hooks/reactQuery/pokemons/useCreatePokemon';

import {
  Container,
  Title,
  HeaderContainer,
  StyledLink,
} from './CreatePokemonAdminPage.styles';
import { ICreatePokemonFormData } from './CreatePokemonAdminPage.types';

const createPokemonFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  weight: yup.string().required('Peso obrigatório'),
  height: yup.string().required('Altura obrigatória'),
});

export default function CreatePokemon(): JSX.Element {
  const { addToast } = useToast();
  const router = useRouter();
  const { mutateAsync } = useCreatePokemon();

  const { register, handleSubmit, formState } = useForm<ICreatePokemonFormData>(
    {
      resolver: yupResolver(createPokemonFormSchema),
    },
  );

  const { errors } = formState;

  const handleCreatePokemon: SubmitHandler<ICreatePokemonFormData> = async values => {
    try {
      const formData = new FormData();

      const { name, weight, height, types, weakness, image } = values;

      formData.append('name', name);
      formData.append('weight', weight);
      formData.append('height', height);
      formData.append('types', types);
      formData.append('weakness', weakness);
      formData.append('image', image[0]);
      await mutateAsync({ data: formData });

      addToast({
        type: 'success',
        title: 'Pokemon criado com sucesso',
      });

      router.push(ApplicationRoutes.ADMIN.POKEMONS.LIST);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro na criação',
        description: 'Tente novamente mais tarde',
      });
    }
  };

  return (
    <>
      <Head>
        <title>Criar Pokemon | Reactmon</title>
      </Head>

      <Container>
        <Title>Crie um novo pokemon</Title>

        <HeaderContainer>
          <Link href={ApplicationRoutes.ADMIN.POKEMONS.LIST}>
            <StyledLink>Voltar</StyledLink>
          </Link>
        </HeaderContainer>

        <Form onSubmit={handleSubmit(handleCreatePokemon)}>
          <Form.FormItem>
            <Input
              name="name"
              label="Digite o nome do pokemon"
              {...register('name')}
              error={errors.name}
            />
          </Form.FormItem>
          <Form.FormItem>
            <Input
              name="weight"
              label="Digite o peso do pokemon"
              {...register('weight')}
              error={errors.weight}
            />
          </Form.FormItem>
          <Form.FormItem>
            <Input
              name="height"
              label="Digite a altura do pokemon"
              {...register('height')}
              error={errors.height}
            />
          </Form.FormItem>

          <Form.FormItem>
            <Input type="file" name="image" {...register('image')} />
          </Form.FormItem>

          <Form.FormItem>
            <Button type="submit">Criar</Button>
          </Form.FormItem>
        </Form>
      </Container>
    </>
  );
}
