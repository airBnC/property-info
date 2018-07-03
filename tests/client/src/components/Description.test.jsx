import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Description from '../../../../client/src/components/Description';

Enzyme.configure({ adapter: new Adapter() });

const moreDescription = [
  {
    head: 'Mock Head',
    body: 'Mock Body',
  },
];

describe('Description', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<Description
      short_description="Mock Short Description"
      more_description={moreDescription}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should change state when read-more and hide are clicked', () => {
    const output = Enzyme.shallow(<Description
      short_description="Mock Short Description"
      more_description={moreDescription}
    />);
    expect(output.state().hidden).toEqual(true);
    output.find('.read-more').simulate('click');
    expect(output.state().hidden).toEqual(false);
    output.find('.hide').simulate('click');
    expect(output.state().hidden).toEqual(true);
  });
});
