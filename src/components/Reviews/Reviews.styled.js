import styled from 'styled-components';
export const ReviewsList = styled.ul`
  list-style: none;
`;
export const ReviewsItem = styled.li`
  margin: 10px;
  font-weight: 500;
  font-size: 13px;
  line-height: 1, 16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  & > h3 {
    color: orange;
    margin-bottom: 10px;
    & > span {
      color: #000;
    }
  }
`;
