import React, { Component } from 'react';
import { NavigationContainer } from './style';

class Nav extends Component {
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
