import PropTypes from 'prop-types';
const ReviewsItem = ({ item }) => {
  const {
    id,
    author_details: { name },
    content,
  } = item;
  return (
    <li key={id}>
      <h3>Author: {name ? name : 'anonymus'}</h3>
      <p style={{ backgroundColor: '#d5e6eb', padding: '10px' }}>{content}</p>
    </li>
  );
};
export default ReviewsItem;

ReviewsItem.prototype = {
  item: PropTypes.object,
};
