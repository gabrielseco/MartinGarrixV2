import styled from 'styled-components';
import Link from 'next/link';
import { media } from './../../globals/styleUtils';

const localProps = {
  navItemSize: '0.875em',
  navItemDefaultHover: 'rgba(255, 255, 255, 0.75)'
}

export const NavItemElement = styled.li`
  padding-left: 0;

  & + li {
    margin: 1em 0;
    
    ${media.large`
      margin: 0;
    `}
  }
`

export const NavItemLink = styled(Link)`
  color: ${props => props.theme.white};
  font-size: ${localProps.navItemSize};
  font-weight: bold;
  letter-spacing: 0.0625em;
  padding: 0 1em;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${localProps.navItemDefaultHover};
  }
`;