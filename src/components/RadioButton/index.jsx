import React from 'react';
import PropsTypes from 'prop-types';
import st from './styles.scss';

const RadioButton = ({ id, label }) => (
  <div className={st.radioItem}>
    <input id={id} type="radio" name="radio" />
    <label htmlFor={id}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  id: PropsTypes.number,
  label: PropsTypes.string,
};

export default RadioButton;
