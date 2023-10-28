import RadioItem from '@/components/common/radio/RadioItem';
import PropTypes from 'prop-types';
import radiosJSON from '@/mock/json.radio.json';

import './styles.css';

const Radios = props => {
  const selectedRadio = false;
  return (
    <div className={`radio-list ${selectedRadio && 'radio-list-off'}`}>
      {radiosJSON.map(radio => {
        return <RadioItem key={radio.id} radio={radio} />;
      })}
    </div>
  );
};

Radios.propTypes = {};

export default Radios;
