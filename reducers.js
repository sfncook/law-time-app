
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
  accounts: [
    {key:'1', name: 'Adams, Alan', phone:'612-111-1234', dur:'10', bal:'15'},
    {key:'2', name: 'Baugh, Bo', phone:'612-222-1234', dur:'20', bal:'25'},
    {key:'3', name: 'Smith, Sally', phone:'612-333-1234', dur:'30', bal:'35'},
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

