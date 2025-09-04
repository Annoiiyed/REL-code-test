import {describe, it} from "node:test";
import assert from "node:assert";

import manual from "./manual.js";

describe("manual", () => {
    it("works in dutch for 0", () => {
        assert.equal(manual(0, 'nl'), "nul");
    });

    it("works in dutch for -7", () => {
        assert.equal(manual(-7, 'nl'), "min zeven");
    });

    it("works in dutch for 7", () => {
        assert.equal(manual(7, 'nl'), "zeven");
    });

    it("works in dutch for 27", () => {
        assert.equal(manual(27, 'nl'), "zevenentwintig");
    });

    it("works in dutch for 33", () => {
        assert.equal(manual(33, 'nl'), "drieëndertig");
    });

    it("works in dutch for 99", () => {
        assert.equal(manual(99, 'nl'), "negenennegentig");
    });

    it("works in dutch for 101", () => {
        assert.equal(manual(101, 'nl'), "honderdéén");
    });

    it("works in dutch for 201", () => {
        assert.equal(manual(201, 'nl'), "tweehonderdéén");
    });

    it("works in dutch for 1001", () => {
        assert.equal(manual(1001, 'nl'), "duizend één");
    });

    it("works in dutch for 2001", () => {
        assert.equal(manual(2001, 'nl'), "tweeduizend één");
    });

    it("works in dutch for 2013", () => {
        assert.equal(manual(2013, 'nl'), "tweeduizend dertien");
    });

    it("works in dutch for 26413", () => {
        assert.equal(manual(26413, 'nl'), "zesentwintigduizend vierhonderddertien");
    });

    it("works in dutch for 326413", () => {
        assert.equal(manual(326413, 'nl'), "driehonderdzesentwintigduizend vierhonderddertien");
    });

    it("works in dutch for 143_235", () => {
        assert.equal(manual(143_235, 'nl'), "honderddrieënveertigduizend tweehonderdvijfendertig");
    });

    it("works in english for 0", () => {
        assert.equal(manual(0, 'en'), "zero");
    });

    it("works in english for -7", () => {
        assert.equal(manual(-7, 'en'), "negative seven");
    });

    it("works in english for 7", () => {
        assert.equal(manual(7, 'en'), "seven");
    });

    it("works in english for 27", () => {
        assert.equal(manual(27, 'en'), "twenty-seven");
    });

    it("works in english for 33", () => {
        assert.equal(manual(33, 'en'), "thirty-three");
    });

    it("works in english for 99", () => {
        assert.equal(manual(99, 'en'), "ninety-nine");
    });

    it("works in english for 101", () => {
        assert.equal(manual(101, 'en'), "one hundred one");
    });

    it("works in english for 201", () => {
        assert.equal(manual(201, 'en'), "two hundred one");
    });

    it("works in english for 1001", () => {
        assert.equal(manual(1001, 'en'), "one thousand one");
    });

    it("works in english for 2001", () => {
        assert.equal(manual(2001, 'en'), "two thousand one");
    });

    it("works in english for 2013", () => {
        assert.equal(manual(2013, 'en'), "two thousand thirteen");
    });

    it("works in english for 26413", () => {
        assert.equal(manual(26413, 'en'), "twenty-six thousand four hundred thirteen");
    });

    it("works in english for 326413", () => {
        assert.equal(manual(326413, 'en'), "three hundred twenty-six thousand four hundred thirteen");
    });

    it("works in english for 143_235", () => {
        assert.equal(manual(143_235, 'en'), "one hundred forty-three thousand two hundred thirty-five");
    });
})