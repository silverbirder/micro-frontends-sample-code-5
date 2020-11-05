import ApolloClient from "apollo-client";
import * as ApolloCacheInmemory from "apollo-cache-inmemory";
import * as ApolloLink from "apollo-link";
import * as ApolloLinkHttp from "apollo-link-http";
import {SearchBoxBase} from "./searchBoxBase";
import gql from "graphql-tag";

export class SearchBox extends SearchBoxBase {
    client: any;
    tag: any;

    constructor(_1: any, _2: any) {
        super(_1, _2);
        const http = new ApolloLinkHttp.HttpLink({
            uri: `${process.env.TEAM_SEARCH_API_URL}`
        });
        const link = ApolloLink.from([http]);

        this.client = new ApolloClient({
            link,
            cache: new ApolloCacheInmemory.InMemoryCache()
        });
        this.tag = gql;
    }
}
