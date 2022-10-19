import { getPopularMovies } from 'Servis/Api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Title } from './Home.styled';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  useEffect(() => {
    const fechPopularMovies = async () => {
      try {
        const data = await getPopularMovies();
        setPopularMoviesList(data.results);
        console.log(data);
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
      <section className="section">
        <div className="container">
          <Title>Trending today</Title>
          <MoviesList filmList={popularMoviesList} />
        </div>
      </section>
    </main>
  );
};
export default Home;
