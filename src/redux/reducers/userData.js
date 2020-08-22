import { addUserData } from '@/redux/actions/userData';

const initState = {
  data: null,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case `${addUserData}`: {
      return {
        data: {
          ...state.data,
          ...payload,
        },
      };
    }
    default: return state;
  }
};
