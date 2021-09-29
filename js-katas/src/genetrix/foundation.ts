export class InfiniteLoopError extends Error {
  name = "InfiniteLoopError"
}

/**
 * Starting from `0` until `stop`
 * @param stop
 */
export function count(stop: number): Generator<number>
/**
 * Starting from `start` until `stop` with step `step`
 * @param start
 * @param stop
 * @param step The value of step parameter, defaults to 1
 */
export function count(
  start: number,
  stop: number,
  step?: number
): Generator<number>
export function* count(start: number, stop?: number, step: number = 1) {
  if (stop == null) {
    stop = start
    start = 0
  }
  if (step > 0) {
    if (start > stop)
      throw new InfiniteLoopError("`start` > `stop` in incrementing counter")

    // hottest (aka most frequent) path
    for (let index = start; index <= stop; index += step) {
      yield index
    }
  } else if (step < 0) {
    if (start < stop)
      throw new InfiniteLoopError("`start` < `stop` in decrementing counter")
    for (let index = start; index >= stop; index += step) {
      yield index
    }
  } else {
    throw new InfiniteLoopError(
      "With a `step=0` you will have an infinite loop"
    )
  }
}

export function* takingAtATime<T>(
  count: number,
  source: Iterable<T>
): Generator<T[]> {
  let counter = 0
  let accumulator: T[] = []
  for (const x of source) {
    counter++
    accumulator.push(x)
    if (counter == count) {
      yield accumulator
      counter = 0
      accumulator = []
    }
  }
  if (accumulator.length !== 0) yield accumulator
}
