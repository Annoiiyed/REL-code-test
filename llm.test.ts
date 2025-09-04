import { Mistral } from '@mistralai/mistralai';
import {describe, it} from "node:test";
import assert from "node:assert";

import llm from "./llm.js";

describe("llm", () => {
    const API_KEY = process.env.MISTRAL_API_KEY;

    if (!API_KEY) {
        return it.skip("requires Mistral API key");
    }

    const client = new Mistral({apiKey: API_KEY!});

    // The model I used for free doesn't speak Dutch very well :(
    it.skip("works in Dutch for 143_235", async () => {
        assert.equal(await llm(143_235, 'Dutch', client), 'honderddrieënveertigduizend tweehonderdvijfendertig');
    })

    it("works in English for 143_235", async () => {
        assert.equal(await llm(143_235, 'English', client), 'one hundred forty-three thousand two hundred thirty-five');
    })
})
