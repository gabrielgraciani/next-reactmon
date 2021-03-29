import { Colors } from 'styles/colors';
import styled from 'styled-components';
import { BannerStyledProps } from './Banner.types';

const Container = styled.div<BannerStyledProps>`
  background: url(${props => props.image});
  min-height: 40rem;
  background-size: cover;
  padding: 10rem 5%;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Colors.black700};
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  z-index: 9;
  position: relative;
`;

const Title = styled.h1`
  font-size: 7rem;
  color: ${Colors.white};
  margin-bottom: 2rem;
`;

const TextContainer = styled.div`
  p {
    color: ${Colors.white};
    font-weight: 100;
    font-size: 2rem;
    margin: 2rem 0 0;
  }
`;

export { Container, ContentContainer, Title, TextContainer };
