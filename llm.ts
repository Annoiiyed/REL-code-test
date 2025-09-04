import type {Mistral} from "@mistralai/mistralai";

export default async function(input: number, language: string, client: Mistral) {
    const chatResponse = await client.chat.complete({
        model: 'open-mistral-nemo',
        messages: [{role: 'user', content: `
            You will spell out a number in ${language}. Do not give any further output. Example, if the language is English and I say 1000, I will say "one thousand". Do not capitalise. Add no further text.
            The number is ${input}. 
        `}],
    });

    return chatResponse.choices.filter(x => !x.message.content?.toString().includes("<think>"))[0]!.message.content;
}