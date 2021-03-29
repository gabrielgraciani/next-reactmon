import styled, { css } from 'styled-components';

import { Colors } from 'styles/colors';

import { CardStyledProps } from './Card.types';

const cardVariations = {
  normal: css`
    background: ${Colors.normalGradient};
  `,
  water: css`
    background: ${Colors.waterGradient};
  `,
  electric: css`
    background: ${Colors.electricGradient};
  `,
  fire: css`
    background: ${Colors.fireGradient};
  `,
  psychic: css`
    background: ${Colors.psychicGradient};
  `,
  grass: css`
    background: ${Colors.grassGradient};
  `,
  ice: css`
    background: ${Colors.iceGradient};
  `,
  fairy: css`
    background: ${Colors.fairyGradient};
  `,
  poison: css`
    background: ${Colors.poisonGradient};
  `,
  bug: css`
    background: ${Colors.bugGradient};
  `,
  fighting: css`
    background: ${Colors.fightingGradient};
  `,
  rock: css`
    background: ${Colors.rockGradient};
  `,
  ghost: css`
    background: ${Colors.ghostGradient};
  `,
  flying: css`
    background: ${Colors.flyingGradient};
  `,
  ground: css`
    background: ${Colors.groundGradient};
  `,
  dragon: css`
    background: ${Colors.dragonGradient};
  `,
  dark: css`
    background: ${Colors.darkpokemonGradient};
  `,
  steel: css`
    background: ${Colors.steelGradient};
  `,
};

const cardTypeVariations = {
  normal: css`
    background: ${Colors.normal};
  `,
  water: css`
    background: ${Colors.water};
  `,
  electric: css`
    background: ${Colors.electric};
  `,
  fire: css`
    background: ${Colors.fire};
  `,
  psychic: css`
    background: ${Colors.psychic};
  `,
  grass: css`
    background: ${Colors.grass};
  `,
  ice: css`
    background: ${Colors.ice};
  `,
  fairy: css`
    background: ${Colors.fairy};
  `,
  poison: css`
    background: ${Colors.poison};
  `,
  bug: css`
    background: ${Colors.bug};
  `,
  fighting: css`
    background: ${Colors.fighting};
  `,
  rock: css`
    background: ${Colors.rock};
  `,
  ghost: css`
    background: ${Colors.ghost};
  `,
  flying: css`
    background: ${Colors.flying};
  `,
  ground: css`
    background: ${Colors.ground};
  `,
  dragon: css`
    background: ${Colors.dragon};
  `,
  dark: css`
    background: ${Colors.darkpokemon};
  `,
  steel: css`
    background: ${Colors.steel};
  `,
};

const Image = styled.img`
  width: 100%;
  max-width: 20rem;
  height: 20rem;
  transition: transform 0.3s ease;
`;

const Container = styled.div<CardStyledProps>`
  transition: all 0.3s ease;
  overflow: hidden;
  width: 100%;
  box-shadow: 0px 0.5rem 2rem -1rem ${Colors.purple};
  position: relative;
  border-radius: 1rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => cardVariations[props.type]}

  &:after {
    transition: all 0.7s ease;
    content: '';
    position: absolute;
    top: -110%;
    left: -210%;
    width: 200%;
    height: 200%;
    transform: rotate(30deg);
    background: ${Colors.gray900};
    background: linear-gradient(
      to right,
      transparent 0%,
      transparent 77%,
      ${Colors.gray500} 92%,
      transparent 100%
    );
  }

  &:hover {
    transform: translateY(-4%);
    box-shadow: 0 0.5rem 2rem -0.5rem ${Colors.purple};
  }

  &:hover:after {
    transition: all 0.7s ease;
    top: -30%;
    left: -30%;
  }

  &:hover ${Image} {
    transform: rotateY(180deg) scale(1.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 26rem;
  padding: 4rem 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.black700};
`;

const ContentContainer = styled.div`
  padding: 0 0 2rem 0;
  background: ${Colors.gray600};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Types = styled.div`
  margin-top: -1.7rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1.5rem 0 0;
`;

const TypeItem = styled.div<CardStyledProps>`
  margin: 0 0 0 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => cardTypeVariations[props.type]};
`;

const TypeText = styled.span`
  text-transform: uppercase;
  color: ${Colors.white};
  font-size: 1.5rem;
  font-family: 'Open Sans';
  font-weight: 400;
  letter-spacing: 0.1rem;
`;

const Name = styled.div`
  width: 100%;
  text-align: center;
`;

const NameText = styled.h4`
  color: ${Colors.black};
  font-size: 2.4rem;
  font-weight: 700;
`;

const Specifications = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 9.5rem;
`;

const SpecificationsRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SpecificationsColLeft = styled.div`
  width: 50%;
  padding-right: 1rem;
  text-align: right;
`;

const SpecificationsColRight = styled.div`
  width: 50%;
  padding-left: 1rem;
  text-align: left;
`;

const SpecificationsText = styled.span`
  font-size: 1.6rem;
  font-weight: 300;
  color: ${Colors.black};
`;

export {
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
  SpecificationsRow,
  SpecificationsColLeft,
  SpecificationsColRight,
  SpecificationsText,
};
