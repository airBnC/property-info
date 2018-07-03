import styled from 'styled-components';

export const Wrapper = styled.div`
  order: 4;
  border-bottom: solid #cccccc 1px;
  padding-bottom: 1em;
  margin-bottom: 1em;
`;

export const StyledButton = styled.button`
  color: #009999;
  border: solid #009999 1.25px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em 0.5em 1em;
  margin: 1em;
`;

export const Modal = styled.div`
  display: ${props => props.displayModal};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  align-items: center;
  background-color: rgb(255,255,255);
  background-color: rgba(255,255,255,0.4);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  background-color: white;
  margin: auto;
  padding: 2em;
  box-shadow: 0 0 1px grey;
  width: 50%;
  justify-content: center;
`;

export const FacebookButton = styled.div`
  background-color: rgb(71, 105, 176);
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 1em;
  margin-top: 1em;
`;

export const GoogleButton = styled.div`
  background-color: white;
  border: solid rgb(118, 118, 118) 2px;
  border-radius: 5px;
  color: rgb(71, 71, 71);
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 1em;
  margin-top: 0.5em;
`;

export const EmailButton = styled.div`
  color: white;
  background-color: rgb(252, 91, 98);
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 1em;
  margin-top: 0.5em;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: rgb(118, 118, 118);
  padding-top: 2em;
  padding-bottom: 2em;
  .half-line {
    width: 45%;
  }
  .full-line {
    width: 96%;
  }
`;

export const Login = styled.div`
  color: rgb(71, 71, 71);
  font-weight: lighter;
  text-align: center;
  span {
    cursor: pointer;
    color: rgb(17, 132, 136);
    padding-left: 1em;
    &:hover {
      text-decoration: underline;
    }
  }
`;
