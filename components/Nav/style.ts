import styled from 'styled-components';
import { media } from './../../globals/styleUtils';

export const NavigationContainer = styled.ul`
  background: ${props => props.theme.headerBackground};
  left: 0;
  list-style-type: none;
  margin: 0;
  opacity: 0;
  padding-left: 1em;
  position: absolute;
  top: 4em;
  visibility: hidden;
  width: 100%;

  ${media.medium`
    padding-left: calc(3.5rem + 0.43rem);
  `}

  ${media.large`
    display: flex;
    justify-content: flex-end;
    opacity: 1;
    position: relative;
    top: 0;
    visibility: visible;
  `}
`