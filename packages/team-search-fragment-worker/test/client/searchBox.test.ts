import {expect, fixture, html as fhtml} from '@open-wc/testing';
import {SearchBox} from '../../src/components/searchBox';

describe('[lit-apollo] ApolloElement', function describeApolloElement() {
    it('is an instance of LitElement', async function () {
        const element = await fixture<SearchBox>(fhtml`<search-box></search-box>`);
        expect(element).to.be.an.instanceOf(SearchBox);
    });
});
