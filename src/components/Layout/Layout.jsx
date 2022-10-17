import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
         <Outlet/>
      </header>
    
  );
};
export default Layout;