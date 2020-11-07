import {expect, fixture, html as fhtml} from '@open-wc/testing';
import {ApolloApp} from './app';

describe('[lit-apollo] ApolloElement', function describeApolloElement() {
    it('is an instance of LitElement', async function () {
        const element = await fixture<ApolloApp>(fhtml`<apollo-app></apollo-app>`);
        expect(element).to.be.an.instanceOf(ApolloApp);
    });
});
