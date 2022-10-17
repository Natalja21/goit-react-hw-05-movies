import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetailsMovies } from 'Servis/Api';
import { toast } from 'react-toastify';
import { Link, useLocation } from 'react-router-dom';
import MovieInfoItem from 'components/MovieInfoItem/MovieInfoItem';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

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

  if (!movie) {
    return null;
  }
  return (
    <main>
      <Link to={location?.state?.from || '/'}>GO BACK</Link>
      <MovieInfoItem movie={movie} />
      <div>
        <h3>Additional infopmation</h3>
        <Link to="cast" >Cast</Link>
        <Link to="reviews" >Reviews</Link>
      </div>
      <Outlet />
    </main>
  );
};
export default MovieDetails;
