addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  console.log("Original URL:", url.href)

  // Debug: Send response for root path
  if (url.pathname === "/") {
    return new Response(`✅ Worker active!\nRewriting to: /projectname\nOriginal URL: ${url.href}`, {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    })
  }

  // Optional: Pass through other requests
  return fetch(request)
}
