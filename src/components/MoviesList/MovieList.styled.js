import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -30px;
`;
export const MovieItemStyled = styled.li`
  flex-basis: calc(100% / 5 - 30px);
  background: transparent;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  list-style: none;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: 0px 0px 59px -17px rgba(255, 107, 1, 1),
      inset 0px 0px 24px -9px rgba(84, 84, 84, 0.5);
    color: brown;
  }

  .linkItem {
    width: 100%;
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  .img {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .text {
    margin: 10px;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
`;
