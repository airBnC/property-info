import PropTypes from 'prop-types';
import React from 'react';
import {
  Wrapper,
  ShortDescription,
  MoreDescription,
  DescriptionContainer,
  DescriptionHead,
  DescriptionBody,
  Clickable,
} from './styles/Description.styles';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.state = {
      hidden: true,
    };
  }

  toggleDisplay() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    return (
      <Wrapper>
        <ShortDescription>
          {this.props.short_description}
        </ShortDescription>
        <Clickable
          onClick={this.toggleDisplay}
          hidden={!this.state.hidden}
          className="read-more"
        >
          Read more about the space &#9660;
        </Clickable>
        <Clickable
          onClick={this.toggleDisplay}
          hidden={this.state.hidden}
          className="hide"
        >
          Hide &#9650;
        </Clickable>
        <MoreDescription
          hidden={this.state.hidden}
        >
          {
            this.props.more_description.map(description => (
              <DescriptionContainer
                key={description.head}
              >
                <DescriptionHead>
                  {description.head}
                </DescriptionHead>
                <DescriptionBody>
                  {description.body}
                </DescriptionBody>
              </DescriptionContainer>
            ))
          }
        </MoreDescription>
      </Wrapper>
    );
  }
}

Description.propTypes = {
  short_description: PropTypes.string,
  more_description: PropTypes.arrayOf(PropTypes.shape({
    head: PropTypes.string,
    body: PropTypes.string,
  })),
};

Description.defaultProps = {
  short_description: 'Short Description',
  more_description: [
    {
      head: 'String',
      body: 'String',
    },
  ],
};
