import {css, html, eventOptions, LitElement, customElement} from 'lit-element';

@customElement('search-box')
export class SearchBoxBase extends LitElement {
    static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
    client: any;
    tag: any;

    constructor(client: any, tag: any) {
        super();
        this.client = client;
        this.tag  = tag;
    }

    render() {
        return html`
         <div>
            <input type="text" id="keyword"><button @click="${this._onClick}">Search</button>
            <div>search box</div>
         </div>
    `;
    }

    @eventOptions({capture: true})
    private async _onClick() {
        const {data} = await this.client.query({
            query: this.tag`{
                      pokemon(id:1) {
                        name
                      }
                    }`
        });
        console.log(data);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'search-box': SearchBoxBase;
    }
}
