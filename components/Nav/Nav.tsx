import React, { Component } from 'react';
import { NavigationContainer } from './style';

interface Props {
  isOpen: boolean
}

interface State {
  height: number;
}

class Nav extends Component<Props, State> {
  navRef: React.RefObject<any>;
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    this.navRef = React.createRef();
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.isOpen && this.props.isOpen) {
      this.setState(prevState => ({
        ...prevState,
        height: this.navRef.current.scrollHeight
      }));
    }

    if (prevProps.isOpen && !this.props.isOpen) {
      this.setState(prevState => ({
        ...prevState,
        height: 0
      }));
    }
  }

  render() {
    const { children, isOpen } = this.props;
    const { height } = this.state;
    return (
      <NavigationContainer ref={this.navRef} height={height} isOpen={isOpen}>
        { children }
      </NavigationContainer>
    );
  }
}

export default Nav;
