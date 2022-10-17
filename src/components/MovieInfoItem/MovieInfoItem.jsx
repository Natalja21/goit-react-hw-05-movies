import { IMG_URL } from 'Servis/Api';
import PropTypes from 'prop-types';
const MovieInfoItem = ({ movie }) => {
  const genres = movie.genres.map(({ name }) => name.toLowerCase()).join(', ');

  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `${IMG_URL}/${movie.poster_path}`
            : `https://assets.zoom.us/images/en-us/desktop/generic/video-not-working.PNG`
        }
        alt=""
        width="100"
        height="200"
      />
      <h2>{movie.original_title}</h2>
      <p>{`User score: ${(movie.vote_average * 10).toFixed(2)}%`}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{genres}</p>
    </div>
  );
};

export default MovieInfoItem;

MovieInfoItem.prototype = {
  movie: PropTypes.object,
};
