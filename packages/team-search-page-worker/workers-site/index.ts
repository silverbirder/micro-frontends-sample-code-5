import {getAssetFromKV} from "@cloudflare/kv-asset-handler";

async function handleRequest(event: FetchEvent) {
    const url = new URL(event.request.url);
    const pathName = url.pathname;
    if (pathName === "/favicon.ico") {
        return new Response('')
    } else {
        const res = await getAssetFromKV(event);
        const cacheUrl = new URL(`${PROXY_URL}/manifest.json`);
        const cacheKey = new Request(cacheUrl.toString());
        //@ts-ignore
        const cache = caches.default;
        let response = await cache.match(cacheKey);
        if (!response) {
            response = await fetch(`${PROXY_URL}/manifest.json`);
            await cache.put(cacheKey, response.clone());
        }
        const teamRewriter = new TeamRewriter((await response.json()));
        const reWriter = new HTMLRewriter()
            .on("team-search-fragment", teamRewriter)
            .on("team-auth-fragment", teamRewriter);
        return reWriter.transform(res)
    }
}

class TeamRewriter {
    json: any;

    constructor(json: any) {
        this.json = json;
    }

    async element(element: any) {
        const {html, js, css, event} = this.json[element.tagName];

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
        if (event !== undefined && event[0] === 'KEYWORD_SEARCH') {
            const {js} = this.json['team-product-fragment'];
            results.push(`
                <script>window.addEventListener("${event}", function(e){
                    const detail = e.detail;
                    let productBoxEl = document.createElement("product-box");
                    productBoxEl.setAttribute("name", detail['pokemon']['name']);
                    document.querySelector('body').append(productBoxEl);
                })</script>
                <script src="${js}" defer></script>
            `);
        }
        element.replace(results.join(''), {html: true})
    }
}

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event))
});

declare var PROXY_URL: String;
