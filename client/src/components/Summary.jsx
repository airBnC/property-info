import PropTypes from 'prop-types';
import React from 'react';
import {
  GuestsSVG,
  BedroomsSVG,
  BedsSVG,
  BathsSVG,
} from './SVG';
import {
  Wrapper,
  HomeType,
  HomeTitle,
  HomeLocation,
  Features,
  Feature,
  StyledImage,
  OwnerName,
  SVGContainer,
} from './styles/Summary.styles';

const Summary = props => (
  <Wrapper
    direction="row"
  >
    <Wrapper
      direction="column"
    >
      <HomeType>
        {props.home_type}
      </HomeType>
      <HomeTitle>
        {props.title}
      </HomeTitle>
      <HomeLocation>
        {props.location}
      </HomeLocation>
      <Features>
        <Feature>
          <SVGContainer>
            <GuestsSVG />
          </SVGContainer>
          {props.property_features[0]} Guests
        </Feature>
        <Feature>
          <SVGContainer>
            <BedroomsSVG />
          </SVGContainer>
          {props.property_features[1]} Bedrooms
        </Feature>
        <Feature>
          <SVGContainer>
            <BedsSVG />
          </SVGContainer>
          {props.property_features[2]} Beds
        </Feature>
        <Feature>
          <SVGContainer>
            <BathsSVG />
          </SVGContainer>
          {props.property_features[3]} Baths
        </Feature>
      </Features>
    </Wrapper>
    <Wrapper
      direction="column"
    >
      <StyledImage
        src={props.owner[1]}
        alt="avatar not found"
      />
      <OwnerName>
        {props.owner[0]}
      </OwnerName>
    </Wrapper>
  </Wrapper>
);

Summary.propTypes = {
  home_type: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
};

Summary.defaultProps = {
  home_type: 'PropTypes.string',
  title: 'PropTypes.string',
  location: 'PropTypes.string',
};

export default Summary;
