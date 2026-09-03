export { capitalize, reverseString };

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