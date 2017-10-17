import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ice-search',
  styleUrl: 'ice-search.scss'
})
export class IceSearch {
  @Prop() term: string = null;

  @Prop() dispatch: (string, any) => void;

  @Event() onTermChange: EventEmitter;

  @Event() onSearch: EventEmitter;

  constructor() {
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.onTermChange.emit(e.target.value);
  };

  handleClick() {

  };

  handleSubmit() {
    this.onSearch.emit();
  };

  render() {
    return (
      <div class='ui middle aligned center aligned grid'>
        <div class='column'>
          <h1 class='ui inverted header'>Giphy Search - Relay Style</h1>
          <form class='ui large form' onSubmit={this.handleSubmit}>
            <div class='ui inverted stacked segment'>
              <div class='field'>
                <div class='ui massive icon input'>
                  <input type='text'
                         value={this.term}
                         onInput={this.handleInput}
                         placeholder='I can haz Giphy???'></input>
                </div>
              </div>
              <div class='ui massive inverted green submit animated fade button'
                   onClick={this.handleClick}>
                 <div class='visible content'>Do I Feel Lucky?</div>
                 <div class='hidden content'>Well, do ya, punk?</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}