import styled from 'styled-components';

export const Wrapper = styled.div`
  order: 4;
  display: flex;
  flex-direction: column;
`;

export const ModalContent = styled.div`
  order: 4;
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  background-color: white;
  margin: auto;
  padding: 2em;
  box-shadow: 0 0 1px grey;
  width: 80%;
`;

export const Title = styled.div`
  order: 1;
  color: #404040;
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1em;
`;

export const AmenitiesContainer = styled.div`
  display: flex;
  color: #4d4d4d;
  flex-direction: column;
  order: 2;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryHead = styled.div`
  order: 1;
  color: #404040;
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: 0.75em;
`;

export const CategoryItemContainer = styled.div`
  order: 2;
  font-weight: lighter;
  border-bottom: solid #cccccc 1px;
  margin-bottom: 0.75em;
`;

export const AmenityDescription = styled.div`
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

export const Supplemental = styled.div`
  margin-bottom: 0.75em;
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
  padding-top: 1em;
  padding-bottom: 50px;
  background-color: rgb(255,255,255);
  background-color: rgba(255,255,255,0.4);
`;

export const PreviewTitle = styled.div`
  color: #404040;
  font-weight: bold;
  font-size: 1.1em;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const PreviewContainer = styled.div`
  order: 5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;

`;

export const PreviewAmenity = styled.div`
  color: #4d4d4d;
  width: 40%;
  margin: 1em 0 1em 0;
  font-weight: lighter;
  text-transform: capitalize;
`;

export const ShowAll = styled.div`
  width: 50%;
  color: #009999;
  margin-top: 1em;
  font-weight: bold;
  width: 100%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  };
`;
