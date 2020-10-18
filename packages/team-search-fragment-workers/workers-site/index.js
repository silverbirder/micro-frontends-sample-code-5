import {getAssetFromKV} from "@cloudflare/kv-asset-handler";

addEventListener("fetch", event => {
    event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
    const url = new URL(event.request.url);
    const pathname = url.pathname;
    try {
        switch (pathname) {
            case '/manifest.json':
                const json = JSON.stringify({
                    'html': `/index.html`,
                    'js': `/bundle.js`,
                }, null, 2);
                return new Response(json, {
                    headers: {
                        "content-type": "application/json;charset=UTF-8"
                    }
                });
            case '/bundle.js':
            case '/index.html':
                return await getAssetFromKV(event);
        }
    } catch (e) {
        return new Response(`"${pathname}" not found`, {
            status: 404,
            statusText: "not found"
        });
    }
}
