import { IMG_URL } from 'Servis/Api';
import PropTypes from 'prop-types';
import { MovieInfoItemContainer, Img, MovieInfoText } from './MovieInfoItem .styled';
import img from '../../img/camera-2008489_640.png'

const MovieInfoItem = ({ movie }) => {
  const genres = movie.genres.map(({ name }) => name.toLowerCase()).join(', ');

  return (
    <MovieInfoItemContainer>
      <Img  src={
          movie.poster_path
            ? `${IMG_URL}/${movie.poster_path}`
            : `${img}`
        }
        alt=""> 
     </Img>
      <MovieInfoText >
      <h2>{movie.original_title}</h2>
      <p>{`User score: ${(movie.vote_average * 10).toFixed(2)}%`}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
        <p>{genres}</p>
        </MovieInfoText>
    </MovieInfoItemContainer>
  );
};

export default MovieInfoItem;

MovieInfoItem.prototype = {
  movie: PropTypes.object,
};
