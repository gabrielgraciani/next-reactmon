import {
  Container,
  ImageContainer,
  Image,
  ContentContainer,
  Types,
  TypeItem,
  TypeText,
  Name,
  NameText,
  Specifications,
  SpecificationsColLeft,
  SpecificationsColRight,
  SpecificationsRow,
  SpecificationsText,
} from './Card.styles';

import { CardProps } from './Card.types';

const Card = ({ mainType, types }: CardProps): JSX.Element => {
  return (
    <Container type={mainType}>
      <ImageContainer>
        <Image src="/images/dratini.png" alt="dratini" />
      </ImageContainer>
      <ContentContainer>
        <Types>
          {types.map(type => (
            <TypeItem type={type} key={type}>
              <TypeText>{type}</TypeText>
            </TypeItem>
          ))}
        </Types>

        <Name>
          <NameText>name</NameText>
        </Name>

        <Specifications>
          <SpecificationsRow>
            <SpecificationsColLeft>
              <SpecificationsText>Peso</SpecificationsText>
            </SpecificationsColLeft>
            <SpecificationsColRight>
              <SpecificationsText>50kg</SpecificationsText>
            </SpecificationsColRight>
          </SpecificationsRow>
        </Specifications>
      </ContentContainer>
    </Container>
  );
};

export default Card;
