// Request body
const body = {
    "messages": [
        {
            "role": "system",
            "content": "You are an AI assistant that helps writing."
        },
        {
            "role": "user",
            "content": "How to start a speech for students in a university?"
        }],
    "temperature": 0.7,
    "top_p": 0.8,
    "max_tokens": 100
};

fetch('https://apim-aoai-eas-dev02.azure-api.net/oai-gpt/openai/deployments/gpt4-0613/chat/completions?api-version=2024-02-15-preview', {
    method: 'POST',
    mode: "no-cors",
    body: JSON.stringify(body),
    // Request headers
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'api-key': '733e65925fd3477e8e4296db148e5d36',}
})
    .then(response => {
        console.log(response.status);
        console.log(body);
        console.log(response.text());
    })
    .catch(err => console.error(err));
