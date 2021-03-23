//addEventListener('fetch', (event) => {
  //event.respondWith(handleRequest(event.request));
//});

//async function handleRequest(request) {
  //const greeting = await ENV.get("GREETING");
  
  //return new Response(greeting);
//}

export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`request method: ${request.method}`)
}