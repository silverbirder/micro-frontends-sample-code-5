import {SearchBox} from '../../src/components/searchBox';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('search-box', () => {
    test('is defined', () => {
        const el = document.createElement('search-box');
        assert.instanceOf(el, SearchBox);
    });

    test('renders with default values', async () => {
        const el = await fixture(html`<search-box></search-box>`);
        assert.shadowDom.equal(el, `<div><input type="text" id="keyword"><button>Search</button><div>search box</div></div>`);
    });
});
