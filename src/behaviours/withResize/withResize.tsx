import React from 'react';

interface Props {
  resizeEvent: Event
};
interface State {
  event: Event | undefined
};

const withResize = <P extends object>(Component: React.ComponentType<P & Props>) => {
  const withResizeHOC: any = class extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        event: undefined
      };
    }

    componentDidMount() {
      window.addEventListener('resize', this.resizeEvent.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeEvent.bind(this));
    }

    resizeEvent(event: Event) {
      this.setState({
        event
      });
    }

    render() {
      const comp = <Component {...this.props} resizeEvent={this.state.event} />;
      return comp;
    }
  };

  withResizeHOC.displayName = `withResize(${Component.displayName ||
    Component.name})`;

  return withResizeHOC;
};

export default withResize;