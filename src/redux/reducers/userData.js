import { addUserData } from '@/redux/actions/userData';

const initState = {};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case `${addUserData}`: {
      return {
        ...state,
        ...payload,
      };
    }
    default: return state;
  }
};
