import React, { useState } from 'react';
import { FirstStep, SecondStep } from './components';
import st from './styles.scss';

const Main = () => {
  const [step] = useState(1);

  if (step === 1) {
    return (
      <FirstStep />
    );
  } if (step === 2) {
    return (
      <SecondStep />
    );
  } return null;
};

export default Main;
