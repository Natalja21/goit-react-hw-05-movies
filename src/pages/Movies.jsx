import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getSerchMovies } from 'Servis/Api';
import BtnLoadMore from 'components/BtnLoadMore/BtnLoadMore';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [invisible, setInvisible] = useState(false);

  useEffect(() => {
     const query = searchParams.get('query')
    if (query === '') {
      setInvisible(true);
      return;
    }
    const fechSerchMovies = async () => {
      setInvisible(true);
      try {
        const { results, total_results, total_pages } = await getSerchMovies(
         query,
          page
        );
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
        setMovies(prev => [...prev,...results]);

        if (page < total_pages) {
         setInvisible(false);
        }
        
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
  }, [searchParams, page]);

  const handleSubmitSearchBar = query => {
     setSearchParams({ query});
      setMovies([]);
  };
  const onLoadingMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <main >
      <div className="container">
      <SearchBar onSubmitSearchBar={handleSubmitSearchBar} />
      { movies.length > 0 && <MoviesList filmList={movies} />}
      { movies.length > 0 && !invisible && (
        <BtnLoadMore type="button" text="Load More" onLoading={onLoadingMore} />
        )}
        </div>
    </main>
  );
};
export default Movies;
