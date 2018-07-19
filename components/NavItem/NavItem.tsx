import React, { ReactElement } from 'react';
/* import Link from 'next/Link';
 */
import { NavItemElement, NavItemLink } from './style';

const NavItem = ({
  children,
  newTab,
  featured,
  href
}: {
  children: ReactElement<any>,
  newTab?: boolean,
  featured?: boolean,
  href: string
}) => {
  return (
  <NavItemElement>
    <NavItemLink href={href}>{children}</NavItemLink>
  </NavItemElement>
  );
};

export default NavItem;