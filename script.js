export { capitalize };

function capitalize (str) {
    const splitStr = str.split("");
    splitStr[0] = splitStr[0].toUpperCase();
    return splitStr.join("");
}