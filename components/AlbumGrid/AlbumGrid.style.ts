import styled from 'styled-components';
import { media } from './../../globals/styleUtils';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  max-width: 56.25em;

  ${media.medium`
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1em 1em 0;
  `}

  li {
    width: 100%;
    ${media.medium`
      width: calc(100% / 3);
    `}
  }

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, auto);
    max-width: 56.25em;
    ${media.medium`
      grid-template-columns: 1fr 1fr 1fr;
    `}

    & li {
      width: auto;
    }

    & li:first-child {
      grid-column: span 2;
      ${media.medium`
        grid-column: span 1;
      `}
    }
  }
}
`