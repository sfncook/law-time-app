
import {
  SET_HOURLY_RATE,
} from './actions';

const defaultState = {
  hourlyRate: '110',
};

function reduce(state = defaultState, action) {
  switch (action.type) {
    case SET_HOURLY_RATE:
      return Object.assign({}, state, {hourlyRate:action.hourlyRate});
    default:
      return state
  }
}

export default reduce;

