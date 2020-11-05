import {fixture, defineCE} from '@open-wc/testing';
import {SearchBoxBase} from "../../src/components/searchBoxBase";

class SearchBoxMock extends SearchBoxBase {
  client: any;
  tag: any;

  constructor(_1: any, _2:any) {
    super(_1, _2);
    this.client = null;
    this.tag = null;
  }
}

const assert = chai.assert;

suite('search-box', () => {
  // test('is defined', () => {
  //   // const el = document.createElement('search-box');
  //   // assert.instanceOf(el, SearchBox);
  // });

  test('renders with default values', async () => {
    const tag = defineCE(SearchBoxMock);
    const el = await fixture(`<${tag}></${tag}>`);
    assert.shadowDom.equal(el,`<div><input type="text" id="keyword"><button>Search</button><div>search box</div></div>`);
  });
});
