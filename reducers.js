
import {
  SET_HOURLY_RATE,
} from './actions';

const defaultState = {
  hourlyRate: '110',
  contacts: [
    {key:'1', name: 'Adams, Alan', isAcct:false},
    {key:'2', name: 'Baugh, Bo', isAcct:false},
    {key:'3', name: 'Smith, Sally', isAcct:true},
  ],
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

