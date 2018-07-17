import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.headerBackground};
  overflow: hidden;
  padding: 0.5em 0.8em;
`;

export const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  max-width: 71.25em;
  min-height: calc(3.125em - 0.5em);
  padding: 0 0.9375em;
  width: 100%;
`

export const LogoContainer = styled.div`
  padding: 0;
  @media(min-width: 37.5em) {
    padding: 0 3em;
  }
  @media(min-width: 56.25em) {
    padding: 0 6em;
  }
`;

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  @media(min-width: 56.25em) {
    display: none;
  }
`