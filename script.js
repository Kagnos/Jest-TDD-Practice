export { capitalize, reverseString, calculator, caesarCipher };

function capitalize (str) {
    const splitStr = str.split("");
    splitStr[0] = splitStr[0].toUpperCase();
    return splitStr.join("");
}

function reverseString (str) {
    const splitStr = str.split("");
    const reversedStr = splitStr.reverse();
    return reversedStr.join("");
}

function calculator (oper, num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);

    switch(oper) {
        case "add":
            return number1 + number2;
        case "subtract":
            return number1 - number2;
        case "multiply":
            return number1 * number2;
        case "divide":
            return number1 / number2;
    }
}

function caesarCipher (str, shift) {
    const splitStr = str.split("");
    const shiftedStr = splitStr.map((char) => shiftCharacter(char, shift));
    return shiftedStr.join("");

    function shiftCharacter (char, shift) {
        const charCode = char.charCodeAt(); // Translate character into Ascii code
        let baseCode;

        if (charCode >= 65 && charCode <= 90) { // Is the character an uppercase letter?
            baseCode = 65;
        } else if (charCode >= 97 && charCode <= 122) { // Is the character a lowercase letter?
            baseCode = 97;
        } else { // Is the character not a letter? Return original character.
            return char;
        }

        const normalizedShift = shift % 26; // Reduce shift to fit alphabet length (26 or less)
        const shiftedCharCode = (charCode + normalizedShift);
        return String.fromCharCode(shiftedCharCode); // Translate Ascii code back into letter
    }
}