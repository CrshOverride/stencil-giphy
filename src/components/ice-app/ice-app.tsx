import { Component } from '@stencil/core';

@Component({
  tag: 'ice-app',
  styleUrl: 'ice-app.scss'
})
export class IceApp {
  render() {
    return [
      <stencil-router>
        <stencil-route url={'/'} component='ice-search' exact={true} />
        <stencil-route url={'/:q'} component='ice-results' exact={true} />
      </stencil-router>
    ]
  }
}