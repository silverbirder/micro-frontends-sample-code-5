import {workerMap} from "./workerMap";

const Router = require('./router');

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
});

async function handleRequest(request) {
    const r = new Router();
    r.get('/manifest.json', async () => {
        const mapResponse = await Promise.all(Object.keys(workerMap).map((name) => {
            const url = workerMap[name];
            return new Promise(async (resolve) => {
                const manifestResponse = await fetch(`${url}/manifest.json`);
                const manifestJson = await manifestResponse.json();
                const responseMap = {};
                Object.keys(manifestJson).forEach((manifestKey) => {
                    responseMap[manifestKey] = `${url}${manifestJson[manifestKey]}`;
                });
                resolve([responseMap, name]);
            });
        }));
        const responseJson = {};
        mapResponse.forEach((map) => {
            const [manifest, name] = map;
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
