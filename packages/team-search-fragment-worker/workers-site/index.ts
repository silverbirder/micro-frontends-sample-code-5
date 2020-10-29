import {getAssetFromKV} from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
    //@ts-ignore
    event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
    const url = new URL(event.request.url);
    const pathname = url.pathname;
    try {
        if (pathname === '/manifest.json') {
            const json = JSON.stringify({
                html: `/index.html`,
                js: `/bundle.js`
            });
            return new Response(json, {
                headers: {
                    "content-type": "application/json;charset=UTF-8"
                }
            });
        } else {
            return await getAssetFromKV(event);
        }
    } catch (e) {
        return new Response(`"${pathname}" not found`, {
            status: 404,
            statusText: "not found"
        });
    }
}
