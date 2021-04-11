import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

const Container = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.div`
  width: 90%;
  padding: 0 5%;
  margin: 4rem 0;
`;

const GoBack = styled.a`
  max-width: 10rem;
  padding: 1rem 0;
  font-size: 1.8rem;
  border-radius: 0.5rem;
  background: ${Colors.gray};
  display: flex;
  color: ${Colors.darkGray};
  align-items: center;
  justify-content: center;
`;

const PokemonContainer = styled.div`
  width: 90%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 48%;
  background: ${Colors.lightGray};
  border-radius: 0.5rem;
`;

const Image = styled.img`
  max-width: 100%;
  width: auto;
`;

const InfoContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 3.5rem;
`;

const SpecificationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #30a7d7;
  margin-top: 1rem;
  border-radius: 0.5rem;
`;

const SpecificationItem = styled.div`
  width: 50%;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const SpecificationItemTitle = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`;

const SpecificationItemText = styled.span`
  color: ${Colors.darkGray};
  font-weight: bold;
  font-size: 1.6rem;
`;

const TypesOrWeaknessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  margin-top: 3rem;
`;

const TypesOrWeaknessTitle = styled.h4`
  width: 100%;
  margin-bottom: 2rem;
  font-size: 2.2rem;
`;

const TypeOrWeaknessItem = styled.span`
  display: block;
  padding: 1rem 3rem;
  background: green;
  border-radius: 0.5rem;

  & + span {
    margin-left: 1rem;
  }
`;

export {
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
};
