import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../../../client/src/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<App />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
