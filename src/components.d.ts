/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import { IceApp as IceApp } from './components/ice-app/ice-app';

interface HTMLIceAppElement extends IceApp, HTMLElement {
}
declare var HTMLIceAppElement: {
  prototype: HTMLIceAppElement;
  new (): HTMLIceAppElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ice-app": HTMLIceAppElement;
  }
  interface ElementTagNameMap {
      "ice-app": HTMLIceAppElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ice-app": JSXElements.IceAppAttributes;
      }
  }
  namespace JSXElements {
      export interface IceAppAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
      }
  }
}

import { IceResults as IceResults } from './components/ice-results/ice-results';

interface HTMLIceResultsElement extends IceResults, HTMLElement {
}
declare var HTMLIceResultsElement: {
  prototype: HTMLIceResultsElement;
  new (): HTMLIceResultsElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ice-results": HTMLIceResultsElement;
  }
  interface ElementTagNameMap {
      "ice-results": HTMLIceResultsElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ice-results": JSXElements.IceResultsAttributes;
      }
  }
  namespace JSXElements {
      export interface IceResultsAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          match?: any
      }
  }
}

import { IceSearch as IceSearch } from './components/ice-search/ice-search';

interface HTMLIceSearchElement extends IceSearch, HTMLElement {
}
declare var HTMLIceSearchElement: {
  prototype: HTMLIceSearchElement;
  new (): HTMLIceSearchElement;
};
declare global {
  interface HTMLElementTagNameMap {
      "ice-search": HTMLIceSearchElement;
  }
  interface ElementTagNameMap {
      "ice-search": HTMLIceSearchElement;
  }
  namespace JSX {
      interface IntrinsicElements {
          "ice-search": JSXElements.IceSearchAttributes;
      }
  }
  namespace JSXElements {
      export interface IceSearchAttributes extends HTMLAttributes {
          mode?: string,
          color?: string,
        
          term?: string,
          dispatch?: any
      }
  }
}

