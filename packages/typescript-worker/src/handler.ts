const URL = "https://8080-b2ee003c-f159-4b98-b07a-ee41961f9283.ws-us02.gitpod.io";
export async function handleRequest(request: Request): Promise<Response> {
  const init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  }
  const response = await fetch(`${URL}/manifest.json`, init);
  const manifest = await response.json();
  const js = manifest.assets.js;
  const init2 = {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  }
  return new Response(`<!DOCTYPE html>
<body>
  <search-box></search-box>
  <script src="${`${URL}${js}`}" defer></script>
</body>`, init2)
}
