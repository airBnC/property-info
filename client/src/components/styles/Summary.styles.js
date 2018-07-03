import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  order: ${props => props.order || 1};
  margin: 0.3em;
`;

export const HomeType = styled.div`
  order: 1;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
  color: #660000;
  cursor: pointer;
`;

export const HomeTitle = styled.div`
  order: 2;
  font-size: 2em;
  margin: 0.25em 0 0.25em 0;
  font-weight: bold;
  color: #404040;
`;

export const HomeLocation = styled.div`
  order: 3;
  font-size: 1em;
  font-weight: lighter;
  color: #4d4d4d;
  cursor: pointer;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  order: 4;
  margin-top: 1em;
  font-weight: lighter;
  font-size: 0.9em;
  color: #1a1a1a;
`;

export const Feature = styled.div`
  order: ${props => props.order || 1};
  margin-right: 1em;
`;

export const StyledImage = styled.img`
  order: 1;
  width: 4em;
  height: auto;
  border-radius: 100%;
  cursor: pointer;
`;

export const OwnerName = styled.div`
  order: 2;
  color: #4d4d4d;
  text-align: center;
  font-weight: lighter;
  font-size: 0.8em;
`;

export const SVGContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 0.1em;
`;
