import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Highlight from '../../../../client/src/components/Highlight';

Enzyme.configure({ adapter: new Adapter() });

const highlight = {
  head: 'Mock Highlight Head',
  body: 'Mock Highlight Body',
};

describe('Highlight', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<Highlight />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should change state after Helpful clicked', () => {
    const output = Enzyme.shallow(<Highlight />);
    expect(output.state().display).toEqual(false);
    output.find('.helpful').simulate('click');
    expect(output.state().display).toEqual(true);
  });
  it('should change state after Helpful clicked', () => {
    const output = Enzyme.shallow(<Highlight />);
    expect(output.state().display).toEqual(false);
    output.find('.not-helpful').simulate('click');
    expect(output.state().display).toEqual(true);
  });
});
