import styled from 'styled-components';
export const SearchForm = styled.form`
  margin: 30px auto;
  display: flex;
  justify-content: center;
  border: 2px solid #000;
  border-radius: 5px;
  width: 400px;

  & > input {
    padding: 8px;
    width: 100%;
    border: none;
    outline: none;
  }
  & > button {
     border: none;
     background:transparent;
 
  }
`;
