import PropTypes from 'prop-types';
import { ReviewsItem } from './Reviews.styled';
const Review = ({ item }) => {
  const {
    id,
    author_details: { name },
    content,
  } = item;
  return (
    <ReviewsItem key={id}>
      <h2>Author: <span>{name ? name : 'anonymus'}</span></h2>
      <p >{content}</p>
    </ReviewsItem>
  );
};
export default Review;

Review.prototype = {
  item: PropTypes.object,
};
