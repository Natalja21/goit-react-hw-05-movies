import styled from 'styled-components';
export const SearchForm = styled.form`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  border: 2px solid brown;
  border-radius: 10px;
  width: 400px;
  

  & > input {
    padding: 8px;
    width: 100%;
    border: none;
    outline: none;
     background:transparent;
      :hover {
    color: brown;
 }
  }
  & > button {
     border: none;
     background:transparent;
 :hover {
    color: brown;
 }
  }
`;
