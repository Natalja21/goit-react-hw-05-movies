import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {Header, NavItem} from './Layout.styled.js'

const Layout = () => {
 
  return (
    <>
    <Header>
      <div className="container">
        <nav>
          <NavItem to="/" >Home</NavItem>
          <NavItem to="/movies" >Movies</NavItem>
        </nav>
        </div>
        </Header>
       <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      
    </>
  );
};
export default Layout;