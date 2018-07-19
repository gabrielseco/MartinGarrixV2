import React from 'react';
/* import Link from 'next/Link';
 */import { NavItemElement } from './style';

const NavItem = ({
  children,
  newTab,
  featured,
  href
}: {
  children: string,
  newTab?: boolean,
  featured?: boolean,
  href: string
}) => {
  return <NavItemElement>{children}</NavItemElement>;
};

export default NavItem;