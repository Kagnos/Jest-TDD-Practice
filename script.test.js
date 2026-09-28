import { capitalize, reverseString, calculator, caesarCipher } from "./script";

test("capitalize function takes hello and returns Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("reverseString function takes Hello and returns olleH", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("all calculator functions operate as intended", () => {
    expect(calculator("add", "4", "2")).toBe(6);
    expect(calculator("subtract", "4", "2")).toBe(2);
    expect(calculator("multiply", "4", "2")).toBe(8);
    expect(calculator("divide", "4", "2")).toBe(2);
})

test("caesarCipher function takes Hello, World! shifts it 3 letters and returns Khoor, Zruog!", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("analyzeArray function takes array of numbers and returns object with average, min, max, and length properties", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4,min: 1,max: 8,length: 6});
})