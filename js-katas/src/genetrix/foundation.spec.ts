import { count, InfiniteLoopError, takingAtATime } from "./foundation"

describe("genetrix.foundation", () => {
  describe("count", () => {
    test("only pass `stop`", () => {
      const sut = [...count(3)]
      expect(sut.length).toBe(4)
      expect(sut[0]).toBe(0)
      expect(sut[sut.length - 1]).toBe(3)
    })

    test("`step=2`", () => {
      const sut = [...count(0, 5, 2)]
      expect(sut.length).toBe(3)
      expect(sut[0]).toBe(0)
      expect(sut[sut.length - 1]).toBe(4)
    })

    test("`step < 0`", () => {
      const sut = [...count(5, 0, -1)]
      expect(sut.length).toBe(6)
      expect(sut[0]).toBe(5)
      expect(sut[sut.length - 1]).toBe(0)
    })

    describe("throw infinite loops errors", () => {
      test("`range=0`", () => {
        expect(() => {
          const sut = [...count(1, 2, 0)]
        }).toThrow(InfiniteLoopError)
      })

      test("`start` > `stop` in incrementing counter", () => {
        expect(() => {
          const sut = [...count(2, 1)]
        }).toThrow(InfiniteLoopError)
      })

      test("`start` < `stop` in decrementing counter", () => {
        expect(() => {
          const sut = [...count(4, 5, -1)]
        }).toThrow(InfiniteLoopError)
      })
    })
  })

  describe("takingAtATime", () => {
    test("`count=2` with sut par", () => {
      const sut = [...count(3)]
      const res = [...takingAtATime(2, sut)]
      expect(res.length).toBe(2)
      expect(res[0]).toEqual([0, 1])
      expect(res[1]).toEqual([2, 3])
    })

    test("`count=2` with sut inpar", () => {
      const sut = [...count(2)]
      const res = [...takingAtATime(2, sut)]
      expect(res.length).toBe(2)
      expect(res[0]).toEqual([0, 1])
      expect(res[1]).toEqual([2])
    })

    test("`count` > `source`.length", () => {
      const sut = [...count(2)]
      const res = [...takingAtATime(1000, sut)]
      expect(res.length).toBe(1)
      expect(res[0]).toEqual([0, 1, 2])
    })
  })
})
