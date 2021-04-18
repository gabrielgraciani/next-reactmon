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
import { Checkbox } from 'components/Checkbox';
import { Loading } from 'components/Loading';

import { useToast } from 'contexts/ToastContext';

import { useCreatePokemon } from 'hooks/reactQuery/pokemons/useCreatePokemon';
import { useTypes } from 'hooks/reactQuery/types/useTypes';

import { useState } from 'react';
import {
  Container,
  Title,
  HeaderContainer,
  StyledLink,
  CheckboxContainer,
  LoadingOrErrorContainer,
  TypesOrWeaknessTitle,
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
  const { data, isLoading } = useTypes();

  const [checkedTypes, setCheckedTypes] = useState([]);
  const [checkedWeakness, setCheckedWeakness] = useState([]);
  console.log('checkedTypes', checkedTypes);

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

  const handleChangeTypes = event => {
    if (checkedTypes.includes(event.target.name)) {
      setCheckedTypes([
        ...checkedTypes.filter(item => item !== event.target.name),
      ]);
    } else {
      setCheckedTypes([...checkedTypes, event.target.name]);
    }
  };

  const handleChangeWeakness = event => {
    if (checkedWeakness.includes(event.target.name)) {
      setCheckedWeakness([
        ...checkedWeakness.filter(item => item !== event.target.name),
      ]);
    } else {
      setCheckedWeakness([...checkedWeakness, event.target.name]);
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
          {isLoading ? (
            <LoadingOrErrorContainer>
              <Loading />
            </LoadingOrErrorContainer>
          ) : (
            <>
              <Form.FormItem>
                <TypesOrWeaknessTitle>
                  Selecione os tipos do pokemon
                </TypesOrWeaknessTitle>
                <CheckboxContainer>
                  {data.map(type => (
                    <Checkbox
                      name={type.name}
                      checked={false}
                      label={type.name}
                      onChange={handleChangeTypes}
                      key={type.id}
                    />
                  ))}
                </CheckboxContainer>
              </Form.FormItem>

              <Form.FormItem>
                <TypesOrWeaknessTitle>
                  Selecione as fraquezas do pokemon
                </TypesOrWeaknessTitle>
                <CheckboxContainer>
                  {data.map(type => (
                    <Checkbox
                      name={type.name}
                      checked={false}
                      label={type.name}
                      onChange={handleChangeWeakness}
                      key={type.id}
                    />
                  ))}
                </CheckboxContainer>
              </Form.FormItem>
            </>
          )}

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
