import React from 'react';
import { shallow } from 'enzyme';

import HeroImage from './HeroImage';

describe('HeroImage suite', () => {
  it('should render the HeroImage component', () => {
    const component = shallow(<HeroImage />);
    expect(component).toBeDefined();
  });
});
