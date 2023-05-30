const assert = require("assert");
const Phrase = require("../index.js");

describe("Phrase", () => {

  describe("#letters", () => {

    it("Should return only the letters of the given argument.", async () => {
      const onlyLetters = new Phrase("Hello, World.");
      // assert(onlyLetters.letters() === "HelloWorld");
      assert.strictEqual(onlyLetters.letters(), "HelloWorld");
    });

  });

  describe("#isPalindrome", () => {

    it("Should return false for a non-palindrome phrase.", async () => {
      const nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.isPalindrome());
    });

    it("Should return true for a plain palindrome phrase.", async () => {
      const plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.isPalindrome());
    });

    it("Should return true for a mixed-case palindrome phrase.", async () => {
      const mixedPalindrome = new Phrase("Racecar");
      assert(mixedPalindrome.isPalindrome());
    });

    it("Should return true for a punctuated palindrome phrase.", async () => {
      const punctuatedPalindrome = new Phrase("Madam, I'm Adam!");
      assert(punctuatedPalindrome.isPalindrome());
    });

    it("Should return true for a palindrome of only numbers.", async () => {
      const numbersPalindrome = new Phrase("12.21");
      assert(numbersPalindrome.isPalindrome());
    });

  });

});
