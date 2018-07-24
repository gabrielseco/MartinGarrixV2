import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import { Container, InnerContainer, LogoContainer, DrawerContainer } from './style';
import { DrawerNav, Nav, NavItem } from './../../components';
import { withResize } from './../../behaviours';

import {
  GET_PUBLIC_PATH,
  addEventsToDocument,
  removeEventsFromDocument,
  targetIsDescendant
} from './../../utils';

interface Props {
  resizeEvent: Event
}

interface State {
  isOpen: boolean;
  event: Event;
}

class Header extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      event: undefined
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.event !== prevProps.resizeEvent) {
      this.setState(
        {
          event: prevProps.resizeEvent
        },
        () => this.closeMenu()
      );
    }
    if (!prevState.isOpen && this.state.isOpen) {
      addEventsToDocument(this.getDocumentEvents());
    }
    if (prevState.isOpen && !this.state.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  componentWillUnmount() {
    if (this.state.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  getDocumentEvents() {
    return {
      click: this.handleDocumentClick.bind(this),
      touchend: this.handleDocumentClick.bind(this)
    };
  }

  handleDocumentClick(event: any) {
    if (
      this.state.isOpen &&
      !targetIsDescendant(event, ReactDOM.findDOMNode(this))
    ) {
      this.setState({ isOpen: false });
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

export default withResize(Header);
