// Your tests here

import { isPalindrome } from "../utils"


describe('isPalindrome', () => {
    it("returns true if palindrome and false if not", () => {
        const word = "madam";

        const palindrome = isPalindrome(word);

        expect(palindrome).toBe(true);
    })
  
})
