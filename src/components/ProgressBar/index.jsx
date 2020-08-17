import React from 'react';
import PropsTypes from 'prop-types';
import st from './styles.scss';

const ProgressBar = ({ value }) => (
  <progress className={st.progressBar} value={value} max="100"></progress>
);

ProgressBar.propTypes = {
  value: PropsTypes.number,
};

export default ProgressBar;
