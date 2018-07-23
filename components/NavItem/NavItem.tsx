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
  const targetProps =
    newTab === true
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : undefined;
  return (
  <NavItemElement>
    <Link prefetch href={href} passHref>
      <NavItemLink featured={featured} {...targetProps}>{children}</NavItemLink>
    </Link>
  </NavItemElement>
  );
};

export default NavItem;