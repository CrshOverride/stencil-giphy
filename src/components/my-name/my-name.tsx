import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;

  @Prop() last: string;

  @Prop() match: any;

  render() {
    return (
      <div>
        Hello, my name is {this.match.params.first} {this.match.params.last}
      </div>
    );
  }
}
