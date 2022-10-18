import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-right: -30px;
`;
export const CastItemBox = styled.li`
  flex-basis: calc(100% / 5 - 30px);
  background: #fff;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  list-style: none;
  .img {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 300px;
    height: 300px;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .text {
    margin: 10px;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.13;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    &--color {
      color: orange;
    }
  }
`;
