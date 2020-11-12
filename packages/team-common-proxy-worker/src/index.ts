import {workerMap} from "./workerMap";

const Router = require('./router');

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
});

async function handleRequest(request: any) {
    const r = new Router();
    r.get('/manifest.json', async () => {
        const mapResponse = await Promise.all(Object.keys(workerMap).map((name) => {
            // @ts-ignore
            const url = workerMap[name];
            return new Promise(async (resolve) => {
                const manifestResponse = await fetch(`${url}/manifest.json`, {
                    headers: {
                        "content-type": "application/json;charset=UTF-8",
                    }
                });
                const manifestJson = await manifestResponse.json();
                const responseMap = {};
                Object.keys(manifestJson).forEach((manifestKey) => {
                    if (manifestKey === 'event') {
                        // @ts-ignore
                        responseMap[manifestKey] = manifestJson[manifestKey];
                    } else {
                        // @ts-ignore
                        responseMap[manifestKey] = `${url}${manifestJson[manifestKey]}`;
                    }
                });
                resolve([responseMap, name]);
            });
        }));
        const responseJson = {};
        mapResponse.forEach((map) => {
            // @ts-ignore
            const [manifest, name] = map;
            // @ts-ignore
            responseJson[name] = manifest;
        });
        const json = JSON.stringify(responseJson, null, 2);
        return new Response(json, {
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
    });

    return (await r.route(request));
}
