addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const originalUrl = new URL(request.url)
  console.log("Original URL:", originalUrl.href)

  // Only rewrite root (and avoid looping if already on /projectname/)
  if (originalUrl.pathname === "/") {
    // Construct new target URL
    const rewritten = new URL("https://s7aboattila.github.io/")
    rewritten.pathname = "/twicedotcomdotcom/"  // ensure trailing slash if GitHub expects it
    console.log("Rewriting to:", rewritten.toString())

    // Preserve original request's method, headers, body, etc.
    const newRequest = new Request(rewritten.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    })

    // Optional: you can add a debug header to see it downstream
    // newRequest.headers.set("X-Worker-Rewritten", "true")

    return fetch(newRequest)
  }

  // Pass through everything else unchanged
  return fetch(request)
}
