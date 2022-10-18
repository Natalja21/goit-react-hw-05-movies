import styled from 'styled-components';
export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Btn = styled.button`
  background-color: transparent;
  padding: 10px 12px;
  width: 400px;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.87;
  align-items: center;
  margin: 10px 0;
  border: 2px solid orange;
  border-radius: 10px;
  box-shadow: 0px 0px 59px -17px rgba(255, 107, 1, 1),
    inset 0px 0px 24px -9px rgba(84, 84, 84, 0.5);
  color: orange;
  :hover {
    color: black;
  }
`;
