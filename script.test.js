import { capitalize, reverseString } from "./script";

test("capitalize function takes hello and returns Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("reverseString function takes Hello and returns olleH", () => {
    expect(reverseString("Hello")).toBe("olleH");
});