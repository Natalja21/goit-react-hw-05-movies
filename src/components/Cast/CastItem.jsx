import { IMG_URL } from 'Servis/Api';
import PropTypes from 'prop-types';
import { CastItemBox } from './Cast.styled';
import img from '../../img/camera-2008489_640.png'
const CastItem = ({ item }) => {
  const { id, profile_path, name, character } = item;
  return (
    <CastItemBox key={id}>
      <img className='img'
        src={
          profile_path
            ? `${IMG_URL}/${profile_path}`
            : `${img}`
        }
        alt={name}
      />
      
      <p className='text text--color'>{name}</p>
      <p className='text'>Character: {character}</p>
    </CastItemBox>
  );
};

export default CastItem;

CastItem.prototype = {
  item: PropTypes.object,
};
