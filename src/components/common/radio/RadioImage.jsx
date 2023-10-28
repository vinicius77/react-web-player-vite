import PropTypes from 'prop-types';

const IMG_BASE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

const RadioImage = ({ flag }) => {
  return (
    <div>
      <img className="radio-flag" src={`${IMG_BASE_URL}${flag}`} alt={flag} />
    </div>
  );
};

RadioImage.propTypes = {
  flag: PropTypes.string,
};

export default RadioImage;
