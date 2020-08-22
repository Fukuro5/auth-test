import React, { useState, useEffect } from 'react';
import PropsTypes from 'prop-types';
import st from './styles.scss';

const ProgressBar = ({ value }) => {
  // const maxValue = value;
  // const [currentValue, setValue] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentValue <= maxValue) setValue((cur) => cur + 1);
  //     console.log(currentValue);
  //     console.log(maxValue);
  //   }, 10);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <progress className={st.progressBar} value={value} max="100"></progress>
  );
};

ProgressBar.propTypes = {
  value: PropsTypes.number,
};

export default ProgressBar;
