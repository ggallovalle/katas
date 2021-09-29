export function* take<T>(n: number, source: Iterable<T>): Generator<T> {
  let counter = 0
  for (const x of source) {
    counter++
    yield x
    if (counter === n) {
      break
    }
  }
}

/**
 * Splits the `source` into an array of arrays, each not exiding the given `size`.
 * @param size the number of elements to take in each list.
 * @param source
 */
export function* chunked<T>(size: number, source: Iterable<T>): Generator<T[]> {
  if (size <= 0) throw new RangeError("`size` MUST be >= 0")
  let counter = 0
  let accumulator: T[] = []
  for (const x of source) {
    counter++
    accumulator.push(x)
    if (counter == size) {
      yield accumulator
      counter = 0
      accumulator = []
    }
  }
  if (accumulator.length !== 0) yield accumulator
}