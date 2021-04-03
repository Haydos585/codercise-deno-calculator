function welcomeMessage() {
    return new Response("Hello, welcome to Codercise Calculator.", {
        headers: {
            'content-type': 'text/plain',
            'X-codercise': '1234'
        }
    });
}

function errorResponse() {
    return new Response("We are unable to handle this request. Please try again later", {
        headers: {
            'content-type': 'text/plain',
            'X-codercise': '1234'
        },
        status: 405
    });
}

function handleRequest(request: any) {
    if (request?.method === "GET") {
        return welcomeMessage();
    }

    return errorResponse();
}


addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});