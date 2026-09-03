import { capitalize, reverseString, calculator } from "./script";

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