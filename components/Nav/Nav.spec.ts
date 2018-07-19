import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav suite', () => {
  it('renders Nav without any state injected', () => {
    const component = shallow(<Nav />);
    expect(component).toBeDefined();
  });
});
