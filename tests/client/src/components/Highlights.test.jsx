import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Highlights from '../../../../client/src/components/Highlights';

Enzyme.configure({ adapter: new Adapter() });

const highlights = [
  {
    head: 'Mock Head',
    body: 'Mock Body',
  },
];

describe('Highlights', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<Highlights
      highlights={highlights}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
