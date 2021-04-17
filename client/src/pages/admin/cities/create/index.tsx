import Link from 'next/link';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { ApplicationRoutes } from 'config/ApplicationRoutes';

import { Form } from 'components/Form';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';

import { useToast } from 'contexts/ToastContext';

import { api } from 'services/api';

import {
  Container,
  Title,
  HeaderContainer,
  StyledLink,
} from './CreateCityAdminPage.styles';
import { ICreateCityFormData } from './CreateCityAdminPage.types';

const createCityFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
});

export default function CreateCity(): JSX.Element {
  const { addToast } = useToast();
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<ICreateCityFormData>({
    resolver: yupResolver(createCityFormSchema),
  });

  const { errors } = formState;

  const handleCreateCity: SubmitHandler<ICreateCityFormData> = async values => {
    try {
      const formData = new FormData();

      const { name, description, image } = values;

      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image[0]);

      await api.post('/cities', formData);

      addToast({
        type: 'success',
        title: 'Cidade criada com sucesso',
      });

      router.push(ApplicationRoutes.ADMIN.CITIES.LIST);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro na criação',
        description: 'Tente novamente mais tarde',
      });
    }
  };

  return (
    <Container>
      <Title>Crie uma nova cidade</Title>

      <HeaderContainer>
        <Link href={ApplicationRoutes.ADMIN.CITIES.LIST}>
          <StyledLink>Voltar</StyledLink>
        </Link>
      </HeaderContainer>

      <Form onSubmit={handleSubmit(handleCreateCity)}>
        <Form.FormItem>
          <Input
            name="name"
            label="Digite o nome da cidade"
            {...register('name')}
            error={errors.name}
          />
        </Form.FormItem>
        <Form.FormItem>
          <Textarea
            name="description"
            label="Digite a descrição da cidade"
            {...register('description')}
            error={errors.description}
          />
        </Form.FormItem>

        <input type="file" name="image" {...register('image')} />

        <Form.FormItem>
          <Button type="submit">Criar</Button>
        </Form.FormItem>
      </Form>
    </Container>
  );
}
