import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    top: -40px;
    opacity: 0;
  }

  to {
    top: 0px;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  order: 3;
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding-bottom: 1em;
`;

export const ShortDescription = styled.div`
  order: 1;
  color: #4d4d4d;
  margin-bottom: 1.5em;
  font-weight: lighter;
  position: relative;
`;

export const MoreDescription = styled.div`
  order: 2;
  flex-direction: column;
  overflow: hidden;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
  position: relative;
  animation: ${slideDown} 0.5s ease 1;
`;
export const DescriptionHead = styled.div`
  order: 1;
  color: #404040;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 0.75em;
`;
export const DescriptionBody = styled.div`
  order: 2;
  color: #4d4d4d;
  font-weight: lighter;
`;

export const Clickable = styled.div`
  order: 3;
  color: #009999;
  font-weight: bold;
  width: 50%;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  };
`;
