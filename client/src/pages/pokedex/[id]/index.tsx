import { useRouter } from 'next/router';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';

import {
  Container,
  HeaderContainer,
  GoBack,
  PokemonContainer,
  ImageContainer,
  Image,
  InfoContainer,
  Name,
  SpecificationsContainer,
  SpecificationItem,
  SpecificationItemTitle,
  SpecificationItemText,
  TypesOrWeaknessContainer,
  TypesOrWeaknessTitle,
  TypeOrWeaknessItem,
} from './Pokemon.styles';

export default function Pokemon(): JSX.Element {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Container>
      <HeaderContainer>
        <GoBack onClick={() => router.back()}>Voltar</GoBack>
      </HeaderContainer>
      <PokemonContainer>
        <ImageContainer>
          <Image src="/images/dratini.png" alt="" />
        </ImageContainer>

        <InfoContainer>
          <Name>Mew</Name>

          <SpecificationsContainer>
            <SpecificationItem>
              <SpecificationItemTitle>Peso</SpecificationItemTitle>
              <SpecificationItemText>4.0kg</SpecificationItemText>
            </SpecificationItem>

            <SpecificationItem>
              <SpecificationItemTitle>Altura</SpecificationItemTitle>
              <SpecificationItemText>0.41m</SpecificationItemText>
            </SpecificationItem>

            <SpecificationItem>
              <SpecificationItemTitle>Gênero</SpecificationItemTitle>
              <SpecificationItemText>
                <BiMaleSign fontSize="1.8rem" />
                <BiFemaleSign fontSize="1.8rem" />
              </SpecificationItemText>
            </SpecificationItem>
          </SpecificationsContainer>

          <TypesOrWeaknessContainer>
            <TypesOrWeaknessTitle>Tipos</TypesOrWeaknessTitle>
            <TypeOrWeaknessItem>PSYCHIC</TypeOrWeaknessItem>
            <TypeOrWeaknessItem>PSYCHIC</TypeOrWeaknessItem>
          </TypesOrWeaknessContainer>

          <TypesOrWeaknessContainer>
            <TypesOrWeaknessTitle>Fraquezas</TypesOrWeaknessTitle>
            <TypeOrWeaknessItem>PSYCHIC</TypeOrWeaknessItem>
            <TypeOrWeaknessItem>PSYCHIC</TypeOrWeaknessItem>
          </TypesOrWeaknessContainer>
        </InfoContainer>
      </PokemonContainer>
    </Container>
  );
}
