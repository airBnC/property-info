import PropTypes from 'prop-types';
import React from 'react';
import { ThumbSVG } from './SVG';
import { SVGContainer } from './styles/Summary.styles';
import {
  Wrapper,
  HelpfulContainer,
  Clickable,
  HelpfulText,
  ThanksContainer,
  HighlightText,
} from './styles/Highlight.styles';

export default class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.state = {
      display: false,
    };
  }

  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    return (
      <Wrapper>
        <HighlightText>
          <span
            className="main"
          >
            {this.props.highlight.head}
          </span>
            &#8231;
          <span
            className="description"
          >
            {this.props.highlight.body}
          </span>
        </HighlightText>
        <span
          hidden={this.state.display}
        >
          <HelpfulContainer>
            <Clickable
              onClick={this.toggleDisplay}
              className="helpful"
            >
              <HelpfulText>
                Helpful
              </HelpfulText>
              <SVGContainer>
                <ThumbSVG />
              </SVGContainer>
            </Clickable>
            <span>
              &#8231;
            </span>
            <Clickable
              onClick={this.toggleDisplay}
              className="not-helpful"
            >
              <HelpfulText>
                Not Helpful
              </HelpfulText>
            </Clickable>
          </HelpfulContainer>
        </span>
        <span
          hidden={!this.state.display}
        >
          <ThanksContainer>
            <HelpfulText>
              Thanks for your feedback.
            </HelpfulText>
          </ThanksContainer>
        </span>
      </Wrapper>
    );
  }
}

Highlight.propTypes = {
  highlight: PropTypes.shape({
    head: PropTypes.string,
    body: PropTypes.string,
  }),
};

Highlight.defaultProps = {
  highlight: {
    head: 'String',
    body: 'String',
  },
};
