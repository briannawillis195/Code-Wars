//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  //make all letters lower case
  //create a new string
  //reverse the string
  //join the string back together
return x.toLowerCase() == x.toLowerCase().split('').reverse().join('')

}