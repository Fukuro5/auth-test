import React from 'react';
import PropsTypes from 'prop-types';
import st from './styles.scss';

const InputBox = (props) => {
  const {
    type,
    placeholder,
    min,
    max,
  } = props;

  return (
    <input
      className={st.dateBirth}
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  );
};

InputBox.propTypes = {
  type: PropsTypes.string,
  placeholder: PropsTypes.string,
  min: PropsTypes.number,
  max: PropsTypes.number,
};

export default InputBox;
