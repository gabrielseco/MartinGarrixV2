import styled, { css } from "styled-components";
import { media } from "src/globals/styleUtils";

interface NavigationContainerProps {
  height: number;
  isOpen: boolean;
}

export const NavigationContainer = styled<NavigationContainerProps, any>("ul")`
  background: ${props => props.theme.headerBackground};
  height: ${props => props.height};
  left: 0;
  list-style-type: none;
  margin: 0;
  opacity: 0;
  padding-left: 1em;
  position: absolute;
  top: 3.5em;
  transition: height 0.35s ease, visibility, opacity 0.4s ease;
  visibility: hidden;
  width: 100%;

  ${props =>
    props.isOpen
      ? css`
          display: block;
          opacity: 1;
          visibility: visible;
        `
      : ""}

  ${media.medium`
    height: auto;
    padding-left: calc(3.5em + 0.43em);
  `}

  ${media.large`
    display: flex;
    justify-content: flex-end;
    opacity: 1;
    position: relative;
    top: 0;
    visibility: visible;
  `}
`;
