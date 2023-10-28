import RadioInfo from '@/components/common/radio/RadioInfo';
import RadioImage from '@/components/common/radio/RadioImage';
import PropTypes from 'prop-types';

const RadioItem = ({ radio }) => {
  return (
    <div key={radio.name} className="radio-container">
      <RadioImage flag={radio.flag} />
      <RadioInfo radio={radio} />
    </div>
  );
};

RadioItem.propTypes = {
  radio: PropTypes.shape({
    name: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    id: PropTypes.string,
    flag: PropTypes.string,
  }),
};

export default RadioItem;

/**
            >
              {radioObj.map((radio, i) => {
                return (
                  <div key={i} className="radio-container">
                    <div>
                      <img
                        src={`${process.env.REACT_APP_IMG_PATH}${radio.flag}`}
                        alt="flag"
                      />
                    </div>
                    <div>
                      <span
                        onClick={
                          radioList ? () => switchRadio(radio.id) : () => null
                        }
                        className="radio-name"
                      >
                        {radio.name}
                      </span>
                      <div className="radio-infos">
                        <span>{radio.state}</span>
                        <span> - </span>
                        <span>{radio.city}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
 */
