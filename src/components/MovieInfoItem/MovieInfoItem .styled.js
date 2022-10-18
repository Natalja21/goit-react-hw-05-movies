import styled from 'styled-components';

export const MovieInfoItemContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;
export const Img = styled.img`
  width: 240px;
  height: 300px;
`;
export const MovieInfoText = styled.div`
  margin-left: 20px;
  color: orange;
  & > p {
    color: black;
    font-weight: 500;
    font-size: 14px;
    line-height: 1, 16;
    letter-spacing: 0.02em;
    margin: 10px 0;
  }
`;
