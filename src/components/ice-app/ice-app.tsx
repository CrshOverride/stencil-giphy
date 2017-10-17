import { Component, State, Listen } from '@stencil/core';
import { createStore } from 'redux';
import { updateTerm } from '../../actions';
import reducer from '../../reducers';

@Component({
  tag: 'ice-app',
  styleUrl: 'ice-app.scss'
})
export class IceApp {
  @State() store: any = createStore(reducer);

  @State() term: string;

  @State() results: any[];

  @Listen('onTermChange')
  termChangeHandler(event: CustomEvent) {
    console.log(event.detail);
  }

  constructor() {
    this.store.subscribe(() => {
      const { term, results } = this.store.getState();
      this.term = term;
      this.results = results;
    });
  }

  render() {
    return (
      <stencil-router>
        <stencil-route url={'/'}
                       component='ice-search'
                       exact={true} />
        <stencil-route url={'/:q'} component='ice-results' exact={true} />
      </stencil-router>
    )
  }
}