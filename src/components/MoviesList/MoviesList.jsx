import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { IMG_URL } from 'Servis/Api';

const MoviesList = ({ filmList }) => {
  const location = useLocation();
  return (
    <ul>
      {filmList.map(({ name, title, id, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `${IMG_URL}/${poster_path}`
                  : `https://assets.zoom.us/images/en-us/desktop/generic/video-not-working.PNG`
              }
              alt={title ? title : name}
              width="200"
              height="200"
            />
            <p>{title ? title : name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;
