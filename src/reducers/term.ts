import { SEARCH_UPDATE_TERM } from '../constants';

const term = (state = null, action) => {
  switch (action.type) {
    case SEARCH_UPDATE_TERM:
      return action.term;
    default:
      return state;
  }
};

export default term;