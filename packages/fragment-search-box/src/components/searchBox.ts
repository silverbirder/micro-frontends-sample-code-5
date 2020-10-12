import {LitElement, html, customElement, css} from 'lit-element';

@customElement('search-box')
export class SearchBox extends LitElement {
    static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

    render() {
        return html`
         <div>
         <div>search box</div>
         </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'search-box': SearchBox;
    }
}
