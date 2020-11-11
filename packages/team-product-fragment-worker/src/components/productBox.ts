import {LitElement, html, customElement, css, eventOptions, property} from 'lit-element';

@customElement('product-box')
export class ProductBox extends LitElement {

    render() {
        return html`
         <div>
            <div>product box</div>
         </div>
    `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'product-box': ProductBox;
    }
}
