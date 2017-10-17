import {
  SEARCH_UPDATE_TERM,
  SEARCH_FETCH_RESULTS,
  SEARCH_RESULTS_UPDATED
} from '../constants';

export const updateTerm = (term) => ({
  type: SEARCH_UPDATE_TERM,
  term
});

export const fetchResults = (term) => ({
  type: SEARCH_FETCH_RESULTS,
  term
});

export const resultsUpdated = (results) => ({
  type: SEARCH_RESULTS_UPDATED,
  results
});
