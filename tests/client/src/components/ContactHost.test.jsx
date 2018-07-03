import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ContactHost from '../../../../client/src/components/ContactHost';

Enzyme.configure({ adapter: new Adapter() });

describe('ContactHost', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<ContactHost />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should change state on modalDisplay and modalHide', () => {
    const output = Enzyme.shallow(<ContactHost />);
    expect(output.state().displayModal).toEqual('none');
    output.find('.modal-display').simulate('click');
    expect(output.state().displayModal).toEqual('flex');
    output.find('.modal-hide').simulate('click');
    expect(output.state().displayModal).toEqual('none');
  });
});
