const { expect } = require("chai");

// Write your tests here!

const {polybius} = require("../src/polybius");

describe("change i and j to 42", () => {
    it("should return the letters of i and j to 42 when encoding.", () => {
        const input = "ij";
        const actual = polybius(input, encode = true);
        const expected = "4242";
        expect(actual).to.eql(expected);
    });
});

describe("it should encode to '11 23513434112251 11 23513434112251' ", () => {
    it("should return the same numbers for 'A Message' and 'a message'." , () => {
        const input = "A Message a message";
        const actual = polybius(input, encode = true);
        const expected = "11 23513434112251 11 23513434112251"
        expect(actual).to.eql(expected);
    });
});

describe("if there is a 42 it should decode to (i/j)", () => {
    it("should translate 42 to (i/j)" , () => {
        const input = "42";
        const actual = polybius(input, encode = false);
        const expected = "(i/j)";
        expect(actual).to.eql(expected);
    });
});

describe("polybius Maintain Spaces", () => {
    it("should maintain spaces before and after encoding." , () => {
        const input = "A Message a message";
        const actual = polybius(input, encode = true);
        const expected = "11 23513434112251 11 23513434112251"
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces before and after decoding." , () => {
        const input = "11 23513434112251 11 23513434112251";
        const actual = polybius(input, encode = false);
        const expected = "a message a message"
        expect(actual).to.eql(expected);
    });
});// Write your tests here!
