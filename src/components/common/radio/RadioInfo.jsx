import PropTypes from 'prop-types';

const RadioInfo = ({ radio }) => {
  const { name, state, city } = radio;

  return (
    <div>
      <span onClick={() => null} className="radio-name">
        {name}
      </span>
      <div className="radio-info">
        <span>{state}</span>
        <span> - </span>
        <span>{city}</span>
      </div>
    </div>
  );
};

RadioInfo.propTypes = {
  radio: PropTypes.shape({
    name: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
  }),
};

export default RadioInfo;
