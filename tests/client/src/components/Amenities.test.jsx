import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Amenities from '../../../../client/src/components/Amenities';

Enzyme.configure({ adapter: new Adapter() });

const amenities = {
  id: 1,
  items: [
    {
      category_head: 'Mock Category Head',
      category_items: [
        {
          amenity_description: 'Mock Category Item',
          supplemental_description: 'Mock Supplemental Description',
        },
      ],
    },
  ],
};

describe('Amenities', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<Amenities
      amenities={amenities}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should change state on modal display and modal hide', () => {
    const output = Enzyme.shallow(<Amenities
      amenities={amenities}
    />);
    expect(output.state().displayModal).toEqual('none');
    output.find('.modal-display').simulate('click');
    expect(output.state().displayModal).toEqual('flex');
    output.find('.modal-hide').simulate('click');
    expect(output.state().displayModal).toEqual('none');
  });
});
