import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1.5em;
  color: #404040;
  font-weight: bold;
`;

export const HelpfulContainer = styled.div`
  display: flex;
  color: #666666;
  flex-direction: row;
  align-items: center;
`;

export const ThanksContainer = styled.div`
  display: flex;
  color: #666666;
  flex-direction: row;
  padding: 0.5em;
`;

export const Clickable = styled.div`
  display: flex;
  color: #666666;
  flex-direction: row;
  padding: 0.5em;
  &:hover {
    color: #009999;
    path {
      stroke: #009999;
      fill: #009999;
    }
  }
`;

export const HelpfulText = styled.div`
  font-weight: 200;
  margin-right: 0.5em;
  padding-top: 0.2em;
`;
