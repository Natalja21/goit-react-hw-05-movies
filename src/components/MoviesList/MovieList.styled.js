import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
display: flex;
flex-wrap: wrap;
  margin-right: -40px;
  
`;
export const MovieItemStyled = styled.li`
  flex-basis: calc(100% / 4 - 40px);
  background: #fff;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  max-width: 200px;
  margin-right: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  list-style: none;

  .linkItem {
    width: 100%;
    display: inline-block;
    text-decoration: none;
    color: black;
    &:hover {
      cursor: pointer;
      color: brown;
    }
  }

  .img {
    padding: 0;
    margin: 0;
    height: 260px;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
`;
