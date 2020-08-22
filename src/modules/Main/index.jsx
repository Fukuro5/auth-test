import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { stepsSelector } from '@/redux/selectors/steps';
import { FirstStep, SecondStep, ThirdStep } from './components';

const Main = () => {
  const step = useSelector(stepsSelector);

  return useMemo(() => {
    if (step === 1) {
      return (
        <FirstStep />
      );
    }
    if (step === 2) {
      return (
        <SecondStep />
      );
    }
    if (step === 3) {
      return (
        <ThirdStep />
      );
    }
    return null;
  }, [step]);
};

export default Main;
