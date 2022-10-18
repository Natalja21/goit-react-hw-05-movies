import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  text-decoration: none;
  color: orange;
  padding: 10px 12px;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.87;
  align-items: center;
 
  :hover {
    color: black;
    text-decoration: underline;
  }
`;
export const AddInfoContainer = styled.div`
margin-top:20px;
& > h2 {
    text-align: center ;
    color:orange;
}
`
export const AddInfoLink = styled(NavLink)`
margin-right: 20px;
margin-top:20px;
 padding: 10px 12px;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.87;
  text-decoration: none;
  color: black;
  padding: 10px 12px;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.87;
  align-items: center;
:hover:not(.active) {
    color: black;
    text-decoration: underline;
  }
  &.active {
    color:orange;
  }
` 