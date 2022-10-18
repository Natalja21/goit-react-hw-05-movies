import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getDetailsMovies } from 'Servis/Api';
import { toast } from 'react-toastify';
import {  useLocation } from 'react-router-dom';
import MovieInfoItem from 'components/MovieInfoItem/MovieInfoItem';
import { GoBackLink, AddInfoContainer,AddInfoLink } from './MovieDetails.styled';

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
      <section className="section">
        <div className="container">
          <GoBackLink to={location?.state?.from ??'/'}>GO BACK</GoBackLink>
          <MovieInfoItem movie={movie} />
          <AddInfoContainer>
            <h2>Additional infopmation</h2>
            <AddInfoLink to="cast" state={{ from: location?.state?.from ??'/' }}>Cast</AddInfoLink>
            <AddInfoLink to="reviews" state={{ from: location?.state?.from ??'/' }}>Reviews</AddInfoLink>
          </AddInfoContainer>
          <Outlet />
        </div>
      </section>
    </main>
  );
};
export default MovieDetails;
