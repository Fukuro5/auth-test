import { stepIncrement, stepDecrement } from '@/redux/actions/steps';

const initState = {
  step: 2,
};

export default (state = initState, { type }) => {
  switch (type) {
    case `${stepIncrement}`: {
      return {
        ...state,
        step: state.step + 1,
      };
    }
    case `${stepDecrement}`: {
      return {
        ...state,
        step: state.step - 1,
      };
    }
    default: return state;
  }
};
