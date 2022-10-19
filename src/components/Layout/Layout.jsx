import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, StyledNavLink} from './Layout.styled.js';
import Loader from 'components/Loader/Loader.jsx';

const Layout = () => {
  return (
    <>
      <Header>
        <div className="container">
          <nav>
            <StyledNavLink to="/" end>Home</StyledNavLink>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </nav>
        </div>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
