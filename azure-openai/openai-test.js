import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '733e65925fd3477e8e4296db148e5d36',
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

main();