module.exports = Phrase;

// Adding a reverse method to the built-in String object.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Creating a Phrase type to detect palindromes.
function Phrase(content) {
  this.content = content;

  // Extracts only the letters from the given content.
  // Returns a strting.
  this.letters = function letters() {
    const letterRegex = /\w{1}/g;
    return this.content.match(letterRegex).join("");
  }

  // Process the give content string.
  // Returns a strting.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Tests whether the given content string is a palindrome.
  // Returns a boolean.
  this.isPalindrome = function isPalindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
