import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import background from '../../img/sunset-3189813_1920.jpg';

export const Header = styled.header`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 75px 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: top 37% center;
  & > nav {
    margin: 75px 0;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 10px;
  color: bisque;
  text-decoration: none;
  font-weight: 900;
  font-size: 22px;
  line-height: 1.87;
  align-items: center;
  letter-spacing: 0.06em;
  &.active {
    color: orange;
  }
  :hover:not(.active) {
    text-decoration: underline;
  }
`;
