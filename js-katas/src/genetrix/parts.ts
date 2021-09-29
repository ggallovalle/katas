/**
 * Splits the `source` into an array of arrays, each not exiding the given `size`.
 * @param size the number of elements to take in each list.
 * @param source
 */
export function* chunked<T>(size: number, source: Iterable<T>): Generator<T[]> {
  if (size <= 0) throw new TypeError("`size` MUST be more than 0")
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
