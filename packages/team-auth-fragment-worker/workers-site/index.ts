import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
// import { authorize, logout, handleRedirect } from './auth0'
// import { hydrateState } from './edge_state'

// addEventListener('fetch', event => event.respondWith(handleRequest(event)))

// see the readme for more info on what these config options do!
const config = {
  // opt into automatic authorization state hydration
  hydrateState: true,
  // return responses at the edge
  originless: true,
}

addEventListener("fetch", (event) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent) {
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

  // try {
  //   let request = event.request
  //
  //   const [authorized, { authorization, redirectUrl }] = await authorize(event)
  //   if (authorized && authorization.accessToken) {
  //     request = new Request(request, {
  //       headers: {
  //         Authorization: `Bearer ${authorization.accessToken}`,
  //       },
  //     })
  //   }
  //
  //   let response = config.originless
  //       ? new Response(null)
  //       : await fetch(event.request)
  //
  //   const url = new URL(event.request.url)
  //   if (url.pathname === '/auth') {
  //     const authorizedResponse = await handleRedirect(event)
  //     if (!authorizedResponse) {
  //       return new Response('Unauthorized', { status: 401 })
  //     }
  //     response = new Response(response.body, {
  //       response,
  //       ...authorizedResponse,
  //     })
  //     return response
  //   }
  //
  //   if (!authorized) {
  //     return Response.redirect(redirectUrl)
  //   }
  //
  //   response = await getAssetFromKV(event)
  //
  //   if (url.pathname === '/logout') {
  //     const { headers } = logout(event)
  //     return headers
  //         ? new Response(response.body, {
  //           ...response,
  //           headers: Object.assign({}, response.headers, headers),
  //         })
  //         : Response.redirect(url.origin)
  //   }
  //
  //   // hydrate the static site with authorization info from auth0
  //   // this uses alpine.js and the htmlrewriter engine built into
  //   // workers. for more info, check out the README
  //   return config.hydrateState
  //       ? new HTMLRewriter()
  //           .on('script#edge_state', hydrateState(authorization.userInfo))
  //           .transform(response)
  //       : response
  // } catch (err) {
  //   return new Response(err.toString())
  // }
