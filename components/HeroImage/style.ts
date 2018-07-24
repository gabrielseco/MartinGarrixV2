import styled from 'styled-components';
import { media } from './../../globals/styleUtils';

export const HeroContainer = styled<{image: string}, any>('div')`
  align-items: center;
  background: 'url(${props => props.image})';
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.large`
    flex-direction: row;
    padding: 11rem 2rem;
  `}
`;