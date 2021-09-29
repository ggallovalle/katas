import { chunked } from "./parts"
import { range } from "./range"

describe("genetrix.parts", () => {
  describe("chunked", () => {
    test("`size=2` with sut par", () => {
      const sut = range(3)
      const res = [...chunked(2, sut)]
      expect(res.length).toBe(2)
      expect(res[0]).toEqual([0, 1])
      expect(res[1]).toEqual([2, 3])
    })

    test("`size=2` with sut inpar", () => {
      const sut = range(2)
      const res = [...chunked(2, sut)]
      expect(res.length).toBe(2)
      expect(res[0]).toEqual([0, 1])
      expect(res[1]).toEqual([2])
    })

    test("`size` > `source`.length", () => {
      const sut = range(2)
      const res = [...chunked(1000, sut)]
      expect(res.length).toBe(1)
      expect(res[0]).toEqual([0, 1, 2])
    })
  })
})
