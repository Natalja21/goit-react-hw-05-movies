import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRewiesMovies } from 'Servis/Api';
import { toast } from 'react-toastify';
import Review from './ReviewsItem';
import { ReviewsList } from './Reviews.styled';

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
    <section className="section">
      <ReviewsList>
        {reviews.length > 0 ? (
          reviews.map(item => <Review key={item.id} item={item} />)
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ReviewsList>
    </section>
  );
};
export default Reviews;
