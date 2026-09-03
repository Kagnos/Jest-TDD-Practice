export { capitalize, reverseString, calculator };

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