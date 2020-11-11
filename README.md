# micro-frontends-sample-code-5
## Motivation

In front-end application design, I am interested in the micro frontends approach.
The controversial approach to the micro frontends approach is the integration pattern.
There are three types: build integration, client integration, and server-side integration.
This time, we will examine the server-side pattern. 
Try Edge Side integration, which is closer to Edge on the server side.

## Architecture

TODO

## Tech

* Cloudflare Workers
* Lit Element
* Lerna

## Setup
### Cloudflare

1. Get as many domains as there are folders in packages. I recommend [freenom](https://freenom.com/)'s free tk domain.
2. Register your domain with Cloudflare.
3. Set the obtained account_id and zone_id to wrangler.toml (wrangler.toml.sample → wrangler.toml). ※ I'll leave the name and route to you.

## Development
### Install

```
$ npm install
$ npm run bootstrap
```

### Start

```
$ npm run watch
$ npm run lt
$ npm run wrangler:dev
```

※ Only the first time you need to access the local tunnel subdomain with your browser.

## Publish

```
$ npm run publish
```

