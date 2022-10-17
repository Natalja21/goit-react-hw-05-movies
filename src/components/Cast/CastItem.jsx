import { IMG_URL } from 'Servis/Api';
import PropTypes from 'prop-types';
const CastItem = ({ item }) => {
  const { id, profile_path, name, character } = item;
  return (
    <li key={id}>
      <img
        src={
          profile_path
            ? `${IMG_URL}/${profile_path}`
            : `https://assets.zoom.us/images/en-us/desktop/generic/video-not-working.PNG`
        }
        alt={name}
        width="200"
        height="200"
      />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;

CastItem.prototype = {
  item: PropTypes.object,
};
