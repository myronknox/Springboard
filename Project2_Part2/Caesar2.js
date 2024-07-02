const friend = "BRUTUS"
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz"//Step 1

const firstLetter = friend[0];//Step 2
const index = alphabet.indexOf(firstLetter.toLowerCase());//Step 2

//Question 1: Javascript starts at 0 when indexing.//

const newIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[newIndex];//Step 3

//Question 2: The modulus operator

const alphabetLength = alphabet.length;//Step 4

//const alphabetLength = alphabet.length;
//const newIndex = (index + shiftValue)% alphabetLength;
//const encryptedFirstLetter = alphabet[newIndex];//Step 5

//const encryptedMessage = "EUXWXV"//Step 6
//const teaserMessage = encryptedMessage.slice(0, 3);//Step 6