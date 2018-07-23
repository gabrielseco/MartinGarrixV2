import React, { Component } from 'react';
import { NavigationContainer } from './style';

interface Props {
  isOpen: boolean
}

class Nav extends Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props; 
    return (
      <NavigationContainer>
        { children }
      </NavigationContainer>
    );
  }
}

export default Nav;
