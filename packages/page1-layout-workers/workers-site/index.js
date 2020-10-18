import {getAssetFromKV} from "@cloudflare/kv-asset-handler";

async function handleRequest(event) {
  const res = await getAssetFromKV(event);
  return rewriter.transform(res)
}

class TeamRewriter {
  element(element) {
    element.replace("<div>hey</div>", {html: true});
  }
}

const rewriter = new HTMLRewriter()
    .on("team-search-fragment", new TeamRewriter());

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event))
});
