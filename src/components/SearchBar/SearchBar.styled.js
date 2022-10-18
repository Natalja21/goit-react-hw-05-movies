import styled from 'styled-components';
export const SearchForm = styled.form`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  border: 2px solid orange;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 0px 59px -17px rgba(255, 107, 1, 1),
    inset 0px 0px 24px -9px rgba(84, 84, 84, 0.5);

  & > input {
    padding: 8px;
    width: 100%;
    border: none;
    outline: none;
    color: orange;
    background: transparent;
    :hover,
    :focus {
      color: black;
    }
  }
  & > button {
    border: none;
    background: transparent;
    color: orange;
    :hover {
      color: black;
    }
  }
`;
