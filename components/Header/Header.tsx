import React, { Component } from 'react';
import Link from 'next/link';
import { Container, InnerContainer, LogoContainer, DrawerContainer } from './style';
import { DrawerNav, HeaderTouchEvents, Nav, NavItem } from './../../components';
import { withResize } from './../../behaviours';

import {
  GET_PUBLIC_PATH,
} from './../../utils';

interface Props {
  resizeEvent: Event
}

interface State {
  isOpen: boolean;
  event: Event;
}

class Header extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      event: undefined
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (this.state.event !== prevProps.resizeEvent) {
      this.setState(
        {
          event: prevProps.resizeEvent
        },
        () => this.closeMenu()
      );
    }
  }

  onMenuOpen() {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  }

  closeMenu() {
    this.setState({
      isOpen: false
    });
  }

  render() {
    return (
      <HeaderTouchEvents isOpen={this.state.isOpen} renderTouchEvents={({ isOpen }) => (
        <Container>
        <InnerContainer>
          <LogoContainer>
          <Link href="/" passHref>
            <a>
              <img
                src={GET_PUBLIC_PATH('logo.png')}
                alt="Martin Garrix"
              />
            </a>
            </Link>
          </LogoContainer>
          <DrawerContainer>
            <DrawerNav onClick={() => this.onMenuOpen()}/>
          </DrawerContainer>
          <Nav isOpen={isOpen}>
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
      )}>
      </HeaderTouchEvents>
    );
  }
}

export default withResize(Header);
