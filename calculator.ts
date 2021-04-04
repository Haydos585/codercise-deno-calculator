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

function calculate(parameter1: number, parameter2: number, operation: String): number | string {
    if (operation === "add") {
        return parameter1 + parameter2;
    }

    if (operation === "subtract") {
        return parameter1 - parameter2;
    }

    if (operation === "multiply") {
        return parameter1 * parameter2;
    }

    if (operation === "divide") {
        return parameter1 / parameter2;
    }

    return "Error";
}

async function handleRequest(request: any) {
    if (request?.method === "GET") {
        return welcomeMessage();
    }

    if (request?.method === "POST") {
        const requestData = await request.json();
        const { parameter1, parameter2, operation } = requestData;

        const returnedValue = calculate(parameter1, parameter2, operation);
        let statusCode = 405;

        if (typeof returnedValue === 'number') {
            statusCode = 200;
        }

        return new Response(`${returnedValue}`, {
            headers: {
                'content-type': 'text/plain',
                'X-codercise': '1234'
            },
            status: statusCode 
        })

    }

    return errorResponse();
}


addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
});