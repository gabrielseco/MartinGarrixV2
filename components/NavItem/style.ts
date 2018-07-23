import styled from 'styled-components';
import { media } from './../../globals/styleUtils';

const localProps = {
  navItemSize: '0.875rem',
  navItemDefaultHover: 'rgba(255, 255, 255, 0.75)',
  navItemColorFeatured: '#ffff42'
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

interface NavItemLinkProps {
  featured?: boolean;
}

export const NavItemLink = styled<NavItemLinkProps, any>('a')`
  color: ${props => props.featured ? localProps.navItemColorFeatured : props.theme.white};
  font-size: ${localProps.navItemSize};
  font-weight: bold;
  letter-spacing: 0.0625em;
  padding: 0 1em;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${props => props.featured ? localProps.navItemColorFeatured : localProps.navItemDefaultHover};
  }
`;