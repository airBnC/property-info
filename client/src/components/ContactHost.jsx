import React from 'react';
import {
  Wrapper,
  StyledButton,
  Modal,
  ModalContent,
  FacebookButton,
  GoogleButton,
  EmailButton,
  Line,
  Login,
} from './styles/ContactHost.styles';

export default class ContactHost extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalDisplay = this.handleModalDisplay.bind(this);
    this.handleModalHide = this.handleModalHide.bind(this);
    this.state = {
      displayModal: 'none',
    };
  }

  handleModalDisplay() {
    this.setState({
      displayModal: 'flex',
    });
  }

  handleModalHide() {
    this.setState({
      displayModal: 'none',
    });
  }

  render() {
    return (
      <Wrapper>
        <StyledButton
          onClick={this.handleModalDisplay}
          className="modal-display"
        >
          Contact host
        </StyledButton>
        <Modal
          onClick={this.handleModalHide}
          displayModal={this.state.displayModal}
          className="modal-hide"
        >
          <ModalContent>
            <FacebookButton>
              Continue with Facebook
            </FacebookButton>
            <GoogleButton>
              Continue with Google
            </GoogleButton>
            <Line>
              <hr className="half-line" />
              or
              <hr className="half-line" />
            </Line>
            <EmailButton>
              Sign up with Email
            </EmailButton>
            <Line>
              <hr className="full-line" />
            </Line>
            <Login>
              Already have an Airbnb account?
              <span>
                Log in
              </span>
            </Login>
          </ModalContent>
        </Modal>
      </Wrapper>
    );
  }
}
