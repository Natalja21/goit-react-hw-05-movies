import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRewiesMovies } from 'Servis/Api';
import { toast } from 'react-toastify';
import ReviewsItem from './ReviewsItem';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    const getActorsMovie = async () => {
      try {
        const data = await getRewiesMovies(movieId);
        setReviews(data.results);
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
  if (!reviews) {
    return null;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(item => <ReviewsItem key={item.id} item={item} />)
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;