import { action, observable } from 'mobx';

class SearchStore {
  @observable term: string = null;

  @action setSearchTerm(term) {
    this.term = term;
  }
}

export default new SearchStore();