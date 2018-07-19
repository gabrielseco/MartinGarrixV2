import React, { Component } from 'react';
import Link from 'next/link';
import { Container, InnerContainer, LogoContainer, DrawerContainer } from './style';
import { Nav, NavItem } from './../../components';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <LogoContainer>
          <Link href="/">
              <img
                src="static/images/logo.png"
                alt="Martin Garrix"
              />
            </Link>
          </LogoContainer>
          <DrawerContainer>
            hola drawer
          </DrawerContainer>
          <Nav>
            <NavItem href="/">Home</NavItem>
            <NavItem href="https://www.bandsintown.com/a/3386497" newTab>
              Tour
            </NavItem>
            <NavItem href="/music">Music</NavItem>
            <NavItem href="https://www.themartingarrixshop.com/" newTab>
              Shop
            </NavItem>
            <NavItem href="/contact">Contact</NavItem>
            <NavItem href="http://stmpd.co/y7dZbVWE" newTab featured>
              ADE 2018
            </NavItem>
          </Nav>
        </InnerContainer>
      </Container>
    );
  }
}

export default Header;
