const API_KEY = "733e65925fd3477e8e4296db148e5d36"; // Replace with your actual API key
async function fetchResponse() {
    const response = await fetch("https://apim-aoai-eas-dev02.azure-api.net/oai-gpt/openai/deployments/gpt4-0613/chat/completions?api-version=2024-02-15-preview", { //This is the API endpoint
        method: "POST",
        mode: "no-cors",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        }),
    });
    const data = await response.json();
    console.log(data);
}
fetchResponse();

