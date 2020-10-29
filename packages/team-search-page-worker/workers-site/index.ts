import {getAssetFromKV} from "@cloudflare/kv-asset-handler";
// import {HTMLRewriter} from "@cloudflare/workers-types";
async function handleRequest(event) {
    const url = new URL(event.request.url);
    const pathName = url.pathname;
    if (pathName === "/favicon.ico") {
        return new Response('')
    } else {
        const res = await getAssetFromKV(event);
        return reWriter.transform(res)
    }
}

class TeamSearchReWriter {
    async element(element) {
        const proxyResponse = await fetch(`${PROXY_URL}/manifest.json`);
        const proxyJsonResponse = await proxyResponse.json();
        const {html, js, css} = proxyJsonResponse[element.tagName];

        let results = [];
        if (html !== undefined) {
            results.push((await (await fetch(html)).text()));
        }
        if (js !== undefined) {
            results.push(`<script src="${js}" defer></script>`);
        }
        if (css !== undefined) {
            results.push(`<link rel="preload" href="${css}" as="style">`);
        }
        element.replace(results.join(''), {html: true})
    }
}

const reWriter = new HTMLRewriter()
    .on("team-search-fragment", new TeamSearchReWriter());

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event))
});
