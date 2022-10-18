import PropTypes from 'prop-types';
import {BtnBox, Btn } from './LoadMore.styled';
const BtnLoadMore = ({ type, text, onLoading }) => (
  <BtnBox>
    <Btn type={type} onClick={() => onLoading()}>
      {text}
    </Btn>
  </BtnBox>
);
export default BtnLoadMore;

BtnLoadMore.prototype = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onLoading: PropTypes.func.isRequired,
};
