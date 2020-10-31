import {LitElement, html, customElement, css, eventOptions} from 'lit-element';
import gql from "graphql-tag";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {from} from "apollo-link";
import {HttpLink} from "apollo-link-http";

const http = new HttpLink({
    uri: `${process.env.TEAM_SEARCH_API_URL}`
});
const link = from([http]);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
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