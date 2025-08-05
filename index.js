addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const originalUrl = new URL(request.url)
  console.log("Original URL:", originalUrl.href)

  if (originalUrl.pathname === "/") {
    return Response.redirect("https://s7aboattila.github.io/twicedotcom.com", 302)
  }

  // Pass through everything else unchanged
  return fetch(request)
}
