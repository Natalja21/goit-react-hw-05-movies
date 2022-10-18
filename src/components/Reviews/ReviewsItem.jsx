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
      <h3>Author: <span>{name ? name : 'anonymus'}</span></h3>
      <p >{content}</p>
    </ReviewsItem>
  );
};
export default Review;

Review.prototype = {
  item: PropTypes.object,
};
