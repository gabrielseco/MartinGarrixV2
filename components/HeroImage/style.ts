import styled from 'styled-components';
import { media } from './../../globals/styleUtils';

export const HeroContainer = styled<{image: string}, any>('div')`
  align-items: center;
  background: url('${props => props.image}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.large`
    flex-direction: row;
    padding: 11em 2em;
  `}
`;

export const ArtboardContainer = styled.div`
  padding: 2.5em;

  ${media.large`
    padding-top: 0;
    width: 15.9375em;
  `}
`;

export const Artboard = styled.img`
  max-width: 16.25em;

  ${media.medium`
    max-width: 100%;
  `}
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em 0;

  ${media.medium`
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 6em;
    width: 100%;
  `}

  ${media.large`
    width: auto;
  `}
`;