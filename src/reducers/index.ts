import { combineReducers } from 'redux';
import term from './term';
import results from './results';

const reducer = combineReducers({
  term,
  results
});

export default reducer;