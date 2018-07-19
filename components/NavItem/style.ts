import styled from 'styled-components';
import { media } from './../../globals/styleUtils';

export const NavItemElement = styled.li`
  padding-left: 0;

  & + li {
    margin: 1em 0;
    
    ${media.large`
      margin: 0;
    `}
  }
`