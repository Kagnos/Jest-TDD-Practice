import { capitalize } from "./script";

test("capitalize function takes hello and returns Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
});