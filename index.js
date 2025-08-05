addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  console.log("Original URL:", url.href)

  // Debug: Send response for root path
  if (url.pathname === "/") {
    url.pathname = "/twicedotcomdotcom/"
    console.log("New URL:", url.toString())
    return fetch(url.toString(), request)
  }

  // Optional: Pass through other requests
  return fetch(request)
}
