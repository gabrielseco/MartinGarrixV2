import React, { Component } from 'react';
import Link from 'next/link';
import { Container, InnerContainer, LogoContainer, DrawerContainer } from './style';
import { DrawerNav, Nav, NavItem } from './../../components';

interface State {
  isOpen: boolean;
}

class Header extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  onMenuOpen() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
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
            <DrawerNav onClick={() => this.onMenuOpen()}/>
          </DrawerContainer>
          <Nav isOpen={this.state.isOpen}>
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
