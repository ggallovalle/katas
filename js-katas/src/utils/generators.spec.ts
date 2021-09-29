// const { count, by, cycle } = require("./generators");
import { by, count, cycle } from "./generators";

describe("count*", () => {
  test("default step 1", () => {
    expect(Array.from(count(0, 3)).length).toBe(4);
  });

  test("step is taken into account", () => {
    expect(Array.from(count(0, 5, 2)).length).toBe(3);
  });
});

describe("by*", () => {
  const a1 = [1, 2, 3, 4, 5, 6];
  test("by 2", () => {
    const sut = by(a1, 2);
    expect(sut.next().value).toEqual([1, 2]);
    expect(sut.next().value).toEqual([3, 4]);
    expect(sut.next().value).toEqual([5, 6]);
  });

  test("throw when `step` bigger thatn `source.length`", () => {
    expect(() => {
      const sut = by(a1, 10);
      // @ts-expect-error for some reason it says that next is not valid
      by.next();
    }).toThrow(TypeError);
  });
});

describe("cycle*", () => {
  const a1 = [1, 2, 3, 4, 5, 6];
  test("cycle by 2", () => {
    const sut = cycle(a1, 2);
    expect(sut.next().value).toEqual([1, 2]);
    expect(sut.next().value).toEqual([2, 3]);
    expect(sut.next().value).toEqual([3, 4]);
  });
});
