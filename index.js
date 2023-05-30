// Reverses the order of a given string.
function reverseString(string) {
  return Array.from(string).reverse().join("");
}

// Tests if a given string is a Palindrome.
function isPalindrome(string) {
  const lowerString = string.toLowerCase();
  return lowerString === reverseString(lowerString);
}

// Adding a reverse method to the built-in String object.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Creating (defining) a new type.
function Phrase(content) {
  this.content = content;

  this.isPalindrome = () => {
    const lowerString = this.content.toLowerCase();
    return lowerString === lowerString.reverse();
  }
}
