import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { IMG_URL } from 'Servis/Api';
import PropTypes from 'prop-types';
import { MoviesListStyled, MovieItemStyled } from './MovieList.styled';
import img from '../../img/camera-2008489_640.png'

const MoviesList = ({ filmList }) => {
  const location = useLocation();
  return (
    <MoviesListStyled>
      {filmList.map(({ name, title, id, poster_path }) => (
        <MovieItemStyled key={id}>
          <Link className='linkItem' to={`/movies/${id}`} state={{ from: location }}>
            <img className='img'
              src={
                poster_path
                  ? `${IMG_URL}/${poster_path}`
                  : `${img}`
              }
              alt={title ? title : name}
             
            />
            <p className='text'>{title ? title : name}</p>
          </Link>
        </MovieItemStyled>
      ))}
    </MoviesListStyled>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  filmList : PropTypes.array,
}