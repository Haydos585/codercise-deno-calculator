addEventListener('fetch', (event) => {
    const answer = 30 + 12;
    const response = new Response(`The answer is: ${answer}, or is it?`, {
        headers: { 'content-type': 'text/plain' }
    })

    event.respondWith(response);
});