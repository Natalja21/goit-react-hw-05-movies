import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetailsMovies } from 'Servis/Api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import MovieInfoItem from 'components/MovieInfoItem/MovieInfoItem';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await getDetailsMovies(movieId);

        setMovie(data);
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
    getMovieDetails();
  }, [movieId]);

  return (
    <main>
      {movie && <MovieInfoItem movie={movie} />}
      <div>
        {movie && <h3>Additional infopmation</h3>}
        {movie && <Link to="cast">Cast</Link>}
        {movie && <Link to="reviews">Reviews</Link>}
      </div>

      <Outlet />
    </main>
  );
};
export default MovieDetails;
