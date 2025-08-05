addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // Rewrite "/" to "/my-subdir/"
  if (url.pathname === "/") {
    url.pathname = "/twicedotcomdotcom/"
    return fetch(url.toString(), request)
  }

  return fetch(request)
}
