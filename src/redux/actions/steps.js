import { createAction } from 'redux-actions';

export const stepIncrement = createAction(
  'STEP_INCREMENT',
);

export const stepDecrement = createAction(
  'STEP_DECREMENT',
);
