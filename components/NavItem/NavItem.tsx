import React from 'react';
import Link from 'next/link';
import { NavItemElement, NavItemLink } from './style';

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
  return (
  <NavItemElement>
    <Link prefetch href={href} passHref>
      <NavItemLink featured={featured}>{children}</NavItemLink>
    </Link>
  </NavItemElement>
  );
};

export default NavItem;