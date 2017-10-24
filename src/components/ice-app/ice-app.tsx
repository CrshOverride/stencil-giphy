import { Component, State, Listen } from "@stencil/core";
import { createStore } from "redux";
import { updateTerm } from "../../actions/index";
import reducer from "../../reducers/index";

@Component({
  tag: "ice-app",
  styleUrl: "ice-app.scss"
})
export class IceApp {
  @State() store: any = createStore(reducer);

  @State() term: string;

  @State() results: any[];

  @Listen("onTermChange")
  termChangeHandler(event: CustomEvent) {
    this.store.dispatch(updateTerm(event.detail));
    console.log(event.detail);
  }

  constructor() {
    this.updateState = this.updateState.bind(this);

    this.updateState();
    this.store.subscribe(this.updateState);
  }

  updateState() {
    const { term, results } = this.store.getState();
    this.term = term;
    this.results = results;
  }

  render() {
    /* 
     * If you uncomment this section, set a breakpoint in  updateState, and modify term
     * before local state is updated, you'll see the appropriate value bound to the
     * input. 
     *
     * return <ice-search term={this.term} />;
     */

     /*
      * Using the stencil-router to bind the state to the input, you'll notice that if
      * you follow the same steps as above, the input value will never be updated because
      * the route is never re-rendered even though state is passed in via componentProps
      */

    return (
      <stencil-router>
        <stencil-route url={'/'}
                       component='ice-search'
                       componentProps={{'term': this.term}}
                       exact={true} />
        <stencil-route url={'/:q'} component='ice-results' exact={true} />
      </stencil-router>
    );
  }
}
