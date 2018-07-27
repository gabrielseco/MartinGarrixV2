import styled from 'styled-components';
import { media } from './../../globals/styleUtils';

export const Container = styled.div`
  background: ${props => props.theme.headerBackground};
  overflow: hidden;
  padding: 0.5em 0.8em;
`;

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: calc(3.125em - 0.5em);
  max-width: 71.25em;
  padding: 0 0.9375em;
  width: 100%;
`

export const LogoContainer = styled.div`
  padding: 0;
  ${media.medium`padding: 0 3em;`}
  ${media.large`padding: 0 6em;`}
`;

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  ${media.large`display: none;`}
`