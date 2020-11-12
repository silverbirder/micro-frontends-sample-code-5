import {LitElement, html, customElement, css, eventOptions, property} from 'lit-element';
import {createApolloClient} from "@apollo-elements/lib/create-apollo-client";
import gql from "graphql-tag";

const client = createApolloClient({
    uri: `${process.env.TEAM_SEARCH_API_URL}`
});

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

    @property({type: String})
    keyword: String = "";

    render() {
        return html`
         <div>
            <input type="text" id="keyword" @change="${this._onChange}" value="${this.keyword}"><button @click="${this._onClick}">Search</button>
            <div>search box</div>
         </div>
    `;
    }

    @eventOptions({capture: true})
    private async _onClick() {
        const {data} = await client.query({
            query: gql`{
                pokemon(id:${this.keyword}) {
                    name
                }
            }`
        });
        let event: CustomEvent = new CustomEvent("KEYWORD_SEARCH", {detail: data});
        window.dispatchEvent(event);
    }

    @eventOptions({capture: true})
    private _onChange(e: Event) {
        this.keyword = (<HTMLInputElement>e.target).value;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'search-box': SearchBox;
    }
}
