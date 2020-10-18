const Router = require('./router')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(request) {
    const init = {
        headers: {'content-type': 'application/json'},
    }
    const body = JSON.stringify({some: 'json'})
    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()
    r.get('/manifest.json', async () => {
        const r = await fetch(`http://localhost:8000/manifest.json`, {
            headers: {
                "content-type": "application/json;charset=UTF-8",
            }
        });
        const j = await r.json();
        const teamSearchJson = {};
        Object.keys(j).forEach((key) => {
            teamSearchJson[key] = `http://localhost:8000${j[key]}`;
        });
        const json = JSON.stringify({
            'team-search-fragment': teamSearchJson
        }, null, 2);
        return new Response(json, {
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
    })

    const resp = await r.route(request)
    return resp
}
