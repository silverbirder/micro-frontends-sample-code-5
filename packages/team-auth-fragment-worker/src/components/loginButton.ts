import {LitElement, html, customElement, css, eventOptions} from 'lit-element';


@customElement('login-button')
export class LoginButton extends LitElement {
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
            <button @click="${this._onClick}">Login Button</button>
         </div>
    `;
    }

    @eventOptions({capture: true})
    private async _onClick() {
        //@ts-ignore
        location.replace(`${location.protocol}//${location.host}/auth`);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'login-button': LoginButton;
    }
}
