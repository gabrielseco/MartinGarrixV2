import React, { Component } from 'react';
import Link from 'next/link';
import { Container, InnerContainer, LogoContainer, DrawerContainer } from './style';

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
        </InnerContainer>
      </Container>
    );
  }
}

export default Header;
