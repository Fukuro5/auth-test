import { combineReducers } from 'redux';
import step from './steps';
import userData from './userData';

export default combineReducers({
  step,
  userData,
});
