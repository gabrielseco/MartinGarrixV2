import React from "react";
import ReactDOM from "react-dom";

import {
  addEventsToDocument,
  removeEventsFromDocument,
  targetIsDescendant
} from "src/utils";

interface IRenderProps {
  isOpen: boolean;
  toggle: () => void;
}

interface Props {
  resizeEvent: Event;
  renderTouchEvents: (props: IRenderProps) => JSX.Element;
}

interface State {
  event: Event | undefined;
  isOpen: boolean;
}

class HeaderTouchEvents extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      event: undefined,
      isOpen: false
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.event !== prevProps.resizeEvent) {
      this.setState({
        event: prevProps.resizeEvent,
        isOpen: false
      });
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

  handleDocumentClick(event: Event) {
    if (
      this.state.isOpen &&
      !targetIsDescendant(event, ReactDOM.findDOMNode(this))
    ) {
      this.setState({ isOpen: false });
    }
  }

  toggle() {
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
    return this.props.renderTouchEvents({
      isOpen: this.state.isOpen,
      toggle: this.toggle.bind(this)
    });
  }
}

export default HeaderTouchEvents;
