import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getSerchMovies } from 'Servis/Api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fechSerchMovies = async () => {
      try {
        const { results, total_results } = await getSerchMovies(query);
        if (total_results === 0) {
          toast.warning(
            `Sorry, there are no movies matching search query "${query}". Please try again.`,
            {
              theme: 'colored',
              closeOnClick: true,
            }
          );
          setMovies([]);
        }
        setMovies(results);
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
    fechSerchMovies();
  }, [query]);

  const handleSubmitSearchBar = value => {
    setSearchParams({ query: value });
  };

  return (
    <main>
      <div className="container">
        <SearchBar onSubmitSearchBar={handleSubmitSearchBar} />
        {movies.length > 0 && <MoviesList filmList={movies} />}
      </div>
    </main>
  );
};
export default Movies;
