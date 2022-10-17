import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovies } from 'Servis/Api';
import { toast } from 'react-toastify';
import CastItem from './CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getActorsMovie = async () => {
      try {
        const data = await getCastMovies(movieId);
        setCast(data.cast);
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
    getActorsMovie();
  }, [movieId]);

  return (
    <div>
      {cast && cast.length ? (
        <ul>
          {cast.map(item => (
            <CastItem item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <p>We don't have information of cast</p>
      )}
    </div>
  );
};

export default Cast;
