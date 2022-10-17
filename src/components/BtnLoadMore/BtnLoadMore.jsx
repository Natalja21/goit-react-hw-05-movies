import PropTypes from 'prop-types';

const BtnLoadMore = ({ type, text, onLoading }) => (
  <div>
    <button type={type} onClick={() => onLoading()}>
      {text}
    </button>
  </div>
);
export default BtnLoadMore;

BtnLoadMore.prototype = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onLoading: PropTypes.func.isRequired,
};
