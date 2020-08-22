import { stepIncrement, stepDecrement } from '@/redux/actions/steps';

const initState = 1;

export default (state = initState, { type }) => {
  switch (type) {
    case `${stepIncrement}`: {
      return state + 1;
    }
    case `${stepDecrement}`: {
      return state - 1;
    }
    default: return state;
  }
};
