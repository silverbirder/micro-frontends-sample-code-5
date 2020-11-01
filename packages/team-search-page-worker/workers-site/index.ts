import {getAssetFromKV} from "@cloudflare/kv-asset-handler";

async function handleRequest(event: FetchEvent) {
    const url = new URL(event.request.url);
    const pathName = url.pathname;
    if (pathName === "/favicon.ico") {
        return new Response('')
    } else {
        const res = await getAssetFromKV(event);
        return reWriter.transform(res)
    }
}

class TeamRewriter {
    async element(element: any) {
        const cacheUrl = new URL(`${PROXY_URL}/manifest.json`);
        const cacheKey = new Request(cacheUrl.toString());
        //@ts-ignore
        const cache = caches.default;
        let response = await cache.match(cacheKey);
        if (!response) {
            response = await fetch(`${PROXY_URL}/manifest.json`);
            await cache.put(cacheKey, response.clone());
        }
        const proxyJsonResponse = await response.json();
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
    .on("team-search-fragment", new TeamRewriter())
    .on("team-auth-fragment", new TeamRewriter());

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event))
});

declare var PROXY_URL: String;
