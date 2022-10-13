import { getPopularMovies } from 'Servis/Api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  useEffect(() => {
    const fechPopularMovies = async () => {
      try {
        const data = await getPopularMovies();
        setPopularMoviesList(data.results);
        // console.log(data);
      } catch (error) {
       const errorMessage = toast.warning(
          'Oops, something went wrong try again later!',
          {
            theme: 'colored',
            closeOnClick: true,
          }
        );
        return errorMessage;
      }
    };
    fechPopularMovies();
  }, []);

  return (
    <main>
      <MoviesList filmList={popularMoviesList} />
    </main>
  );
};
export default Home;
