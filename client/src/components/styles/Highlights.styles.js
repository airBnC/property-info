import styled from 'styled-components';

export const Wrapper = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 90%;
  margin: 1em auto 1em auto;
  padding: 0.5em;
  box-shadow: 0 0 1px grey;
`;

export const Title = styled.div`
  order: 1;
  color: #808080;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7em;
  margin: 1em;
`;

export const HighlightsWrapper = styled.div`
  order: 2;
  margin: 1em;
`;
