import React from 'react';
import { shallow } from 'enzyme';
import HeaderTouchEvents from './HeaderTouchEvents';

describe('HeaderTouchEvents suite', () => {
  it('renders HeaderTouchEvents without any state injected', () => {
    const component = shallow(<HeaderTouchEvents />);
    expect(component).toBeDefined();
  });
});
