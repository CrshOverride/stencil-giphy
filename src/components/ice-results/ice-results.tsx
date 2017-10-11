import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ice-results'
})
export class IceResults {
  @Prop() match: any;

  render() {
    return (
      <div>Results for: {this.match.params.q}</div>
    );
  }
}