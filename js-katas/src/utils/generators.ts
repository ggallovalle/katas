export function* count(
  from: number,
  to: number,
  step: number = 1
): Generator<number> {
  for (let index = from; index <= to; index += step) {
    yield index
  }
}

export function* by<T>(source: Array<T>, step: number): Generator<Array<T>> {
  if (source.length < step) {
    throw new TypeError("`source.length` can not be bigger than `step`")
  }
  for (const i of count(0, source.length - 1, step)) {
    const acc = []
    for (const j of count(i, i + step - 1)) {
      acc.push(source[j])
    }
    yield acc
  }
}

export function* cycle<T>(source: Array<T>, size: number): Generator<Array<T>> {
  if (source.length < size) {
    throw new TypeError("`source.length` can not be bigger than `size`")
  }
  for (const i of count(0, source.length - 1)) {
    const acc: Array<T> = []
    for (const j of count(i, i + size - 1)) {
      acc.push(source[j])
    }
    yield acc
  }
}
