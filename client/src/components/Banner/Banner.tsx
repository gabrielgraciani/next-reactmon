import {
  Container,
  ContentContainer,
  TextContainer,
  Title,
} from './Banner.styles';
import { BannerProps } from './Banner.types';

export const Banner = ({
  children,
  image,
  title,
}: BannerProps): React.ReactElement => {
  return (
    <Container image={image}>
      <ContentContainer>
        <Title>{title}</Title>

        <TextContainer>{children}</TextContainer>
      </ContentContainer>
    </Container>
  );
};
