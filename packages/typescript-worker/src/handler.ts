const URL: string = process.env.SEARCH_PUBLIC_URL || '';
export async function handleRequest(request: Request): Promise<Response> {
  const response = await fetch(URL);
  const manifestContents = await response.text();
  const init = {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  }
  return new Response(manifestContents, init)
}
