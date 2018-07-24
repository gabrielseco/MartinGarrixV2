import React from 'react';
import ReactDOM from 'react-dom';

import {
  addEventsToDocument,
  removeEventsFromDocument,
  targetIsDescendant
} from './../../utils';

interface Props {
  isOpen: boolean;
  renderTouchEvents: ({ isOpen: boolean }) => JSX.Element
}

interface State {
  isOpen: boolean;
}

class HeaderTouchEvents extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen || false
    };
  }

  componentDidUpdate(_: Props, prevState: State) {
    this.setState({
      isOpen: this.props.isOpen
    })

    if (!prevState.isOpen && this.state.isOpen) {
      addEventsToDocument(this.getDocumentEvents());
    }
    if (prevState.isOpen && !this.state.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  componentWillUnmount() {
    if(this.props.isOpen) {
      removeEventsFromDocument(this.getDocumentEvents());
    }
  }

  getDocumentEvents() {
    return {
      click: this.handleDocumentClick.bind(this),
      touchend: this.handleDocumentClick.bind(this)
    };
  }

  handleDocumentClick(event: Event) {
    if (
      this.props.isOpen &&
      !targetIsDescendant(event, ReactDOM.findDOMNode(this))
    ) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return this.props.renderTouchEvents({
      isOpen: this.state.isOpen
    })
  }
}

export default HeaderTouchEvents;
