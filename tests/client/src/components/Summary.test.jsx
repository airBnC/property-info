import React from 'react';
import Enzyme from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Summary from '../../../../client/src/components/Summary';

Enzyme.configure({ adapter: new Adapter() });

const owner = {
  name: 'Mock Owner Name',
  avatar_url: 'MockAvatarURL',
};

const propertyFeatures = {
  guests: 1,
  bedrooms: 1,
  beds: 1,
  baths: 1,
};

describe('Summary', () => {
  it('should render correctly', () => {
    const output = Enzyme.shallow(<Summary
      home_type="Mock Home Type"
      title="Mock Title"
      location="Mock Location"
      owner={owner}
      property_features={propertyFeatures}
    />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
