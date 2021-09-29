const { add } = require("./sep29")

test.skip("a chain adding function", () => {
  // expect(add(1)).toBe(1);
  expect(add(1)(2)).toBe(3)
  // expect(add(1)(2)(3)).toBe(5);
})
