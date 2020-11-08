import {LitElement, html, customElement, css, eventOptions} from 'lit-element';
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
        const {data} = await client.query({
            query: gql`{
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
        'search-box': SearchBox;
    }
}
