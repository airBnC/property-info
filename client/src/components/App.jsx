import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import Amenities from './Amenities';
import Description from './Description';
import Highlights from './Highlights';
import Summary from './Summary';
import ContactHost from './ContactHost';

const fakeGeneralInfo = JSON.parse('{"id":1,"title":"Practical Fantastic Home","location":"Rosenbaummouth","home_type":"Intelligent HOUSE","owner":["Pearl","https://s3.amazonaws.com/uifaces/faces/twitter/falvarad/128.jpg"],"property_features":[0,3,3,2],"highlights":[{"head":"Indoor fireplace","body":""},{"head":"Self check-in","body":""},{"head":"Great check-in experience","body":""}],"short_description":"Harum perspiciatis minima tempore nobis sed.","more_description":[{"head":"The space","body":"Adipisci reprehenderit repudiandae blanditiis. Dolor assumenda consectetur fuga. Eveniet amet optio quo veniam vel at quas. Nisi et autem et magni dolorem accusamus ipsam eius laborum."},{"head":"Guest access","body":"Labore rerum sed tempore ipsa magnam odio ducimus modi error."}]}');
const fakeAmenities = JSON.parse('{"id":1,"items":[{"category_head":"Industrial","category_items":[{"amenity_description":"primary","supplemental_description":"Qui ut qui reiciendis omnis id delectus assumenda."},{"amenity_description":"Pa\'anga","supplemental_description":"Optio odio odio."},{"amenity_description":"Customer-focused","supplemental_description":"Vel sed ad optio et eligendi ab."}]},{"category_head":"Industrial2","category_items":[{"amenity_description":"primary","supplemental_description":"Qui ut qui reiciendis omnis id delectus assumenda."},{"amenity_description":"Pa\'anga","supplemental_description":"Optio odio odio."},{"amenity_description":"Customer-focused","supplemental_description":"Vel sed ad optio et eligendi ab."}]}]}');

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Neuzeit", sans-serif;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: fakeGeneralInfo,
      amenities: fakeAmenities,
    };
  }

  componentDidMount() {
    this.getGeneralInfo();
    this.getAmenities();
  }

  getGeneralInfo() {
    let id = document.location.href.slice(28).split('')
    id.pop()
    id = id.join('')
    $.ajax({
      url: `/api/rooms/${id}/general`,
      type: 'GET',
      success: ((general) =>  {
        let generalInfo = JSON.parse(general)
        console.log(typeof generalInfo)
        if(typeof generalInfo === 'string') {
          var data = JSON.parse(generalInfo)
        } else {
          var data = generalInfo
        }
  
      
        let highlightsToChange = data.highlights
        let highlights = [];
        for(var i = 0; i < highlightsToChange.length; i += 2) {
          highlights.push({head:highlightsToChange[i], body:highlightsToChange[i + 1]})
        }
        data.highlights = highlights
        let more_descriptionEdit = data.more_description
        console.log(more_descriptionEdit)
        let more_description = [];
        for(var g = 0; g < more_descriptionEdit.length; g+= 2) {
          more_description.push({head:more_descriptionEdit[g], body:more_descriptionEdit[g + 1]})
        }
        data.more_description = more_description;
        this.setState({
        generalInfo: data
      })
      }),
    });
  }
  
  getAmenities() {
    $.ajax({
      url: '/api/rooms/amenities',
      type: 'GET',
      success: (data => {
        this.setState({
        amenities: JSON.parse(data),
      })
      }),
    });
  }

  render() {
    return (
      <Wrapper>
        <Summary
          title={this.state.generalInfo.title}
          location={this.state.generalInfo.location}
          home_type={this.state.generalInfo.home_type}
          owner={this.state.generalInfo.owner}
          property_features={this.state.generalInfo.property_features}
        />
        <Highlights
          highlights={this.state.generalInfo.highlights}
        />
        <Description
          short_description={this.state.generalInfo.short_description}
          more_description={this.state.generalInfo.more_description}
        />
        <ContactHost />
        <Amenities
          amenities={this.state.amenities}
          displayModal={this.state.displayModal}
          onAmenitiesDisplay={this.state.handleAmenitiesDisplay}
          onAmenitiesHide={this.state.handleAmenitiesHide}
        />
      </Wrapper>
    );
  }
}
