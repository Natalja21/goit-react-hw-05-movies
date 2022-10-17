import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 30px 0;
  border-bottom: 5px solid brown;
  box-shadow: 0px 0px 3px 1px lightslategray;
  background-color: orange;
`;

export const NavItem = styled(NavLink)`
  padding: 10px;
  color: black;
  text-decoration: none;
  font-weight: 900;
  font-size: 22px;
  line-height: 1.87;
  align-items: center;
  letter-spacing: 0.06em;
  &.active {
    color: brown;
  }
  :hover:not(.active) {
    text-decoration: underline;
  }
`;
