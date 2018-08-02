import React from 'react';

interface Props {};
interface State {};

const withStyle = ({
  styles,
  selector
}: {
  styles: object,
  selector: string
}) => <P extends object>(Component: React.ComponentType<P & Props>) => {
  const withStyleHOC: any = class extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      const element: any = document.querySelector(selector);

      if (element) {
        const styleProperties = Object.keys(styles);

        Object.values(styles).forEach((styleValue, index) => {
          element.style[styleProperties[index]] = styleValue;
        });
      } else {
        throw Error(`The selector ${selector} does not exist`);
      }
    }

    componentWillUnmount() {
      const element: any = document.querySelector(selector);

      if (element) {
        const styleProperties = Object.keys(styles);

        Object.values(styles).forEach((_, index) => {
          element.style[styleProperties[index]] = null;
        });
      } else {
        throw Error(`The selector ${selector} does not exist`);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };

  withStyleHOC.displayName = `withStyle(${Component.displayName ||
    Component.name})`;

  return withStyleHOC;
};

export default withStyle;