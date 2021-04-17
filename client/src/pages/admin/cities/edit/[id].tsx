import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';

import { ApplicationRoutes } from 'config/ApplicationRoutes';

import { useCityId } from 'hooks/reactQuery/cities/useCityId';
import { useUpdateCity } from 'hooks/reactQuery/cities/useUpdateCity';

import { Form } from 'components/Form';
import { Button } from 'components/Button';
import { Loading } from 'components/Loading';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';

import { useToast } from 'contexts/ToastContext';
import {
  Container,
  Title,
  HeaderContainer,
  StyledLink,
  LoadingOrErrorContainer,
  Image,
} from './EditCityAdminPage.styles';
import {
  IUpdateCityFormData,
  IEditCityAdminPageProps,
} from './EditCityAdminPage.types';

const updateCityFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
});

export default function EditCity({ id }: IEditCityAdminPageProps): JSX.Element {
  const { addToast } = useToast();
  const router = useRouter();

  const {
    data: dataCity,
    isLoading: isLoadingFetchCity,
    isError: isErrorFetchCity,
  } = useCityId({ id });
  const { mutateAsync } = useUpdateCity();

  const { register, handleSubmit, formState } = useForm<IUpdateCityFormData>({
    resolver: yupResolver(updateCityFormSchema),
  });

  const { errors } = formState;

  const handleUpdateCity: SubmitHandler<IUpdateCityFormData> = async values => {
    try {
      const formData = new FormData();

      const { name, description, image } = values;

      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image[0]);
      await mutateAsync({ id, data: formData });

      addToast({
        type: 'success',
        title: 'Cidade alterada com sucesso',
      });

      router.push(ApplicationRoutes.ADMIN.CITIES.LIST);
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro na alteração',
        description: 'Tente novamente mais tarde',
      });
    }
  };

  return (
    <>
      <Head>
        <title>Editar Cidade | Reactmon</title>
      </Head>

      <Container>
        <Title>Editando uma cidade</Title>

        <HeaderContainer>
          <Link href={ApplicationRoutes.ADMIN.CITIES.LIST}>
            <StyledLink>Voltar</StyledLink>
          </Link>
        </HeaderContainer>

        {isLoadingFetchCity ? (
          <LoadingOrErrorContainer>
            <Loading />
          </LoadingOrErrorContainer>
        ) : isErrorFetchCity ? (
          <LoadingOrErrorContainer>
            Ocorreu um erro ao carregar cidade. Tente novamente mais tarde.
          </LoadingOrErrorContainer>
        ) : (
          <Form onSubmit={handleSubmit(handleUpdateCity)}>
            <Form.FormItem>
              <Input
                name="name"
                label="Digite o nome da cidade"
                defaultValue={dataCity.name}
                {...register('name')}
                error={errors.name}
              />
            </Form.FormItem>
            <Form.FormItem>
              <Textarea
                name="description"
                label="Digite a descrição da cidade"
                defaultValue={dataCity.description}
                {...register('description')}
                error={errors.description}
              />
            </Form.FormItem>
            <Form.FormItem>
              {dataCity.image && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/files/${dataCity.image}`}
                  alt={dataCity.name}
                />
              )}
              <Input type="file" name="image" {...register('image')} />
            </Form.FormItem>

            <Form.FormItem>
              <Button type="submit">Editar</Button>
            </Form.FormItem>
          </Form>
        )}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  return {
    props: { id },
  };
};
