addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const greeting = await ENV.get("GREETING");

  return new Response(greeting);
}
