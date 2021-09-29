/**
 * Count `from` `to`.
 * @param {number} from Starting at.
 * @param {number} to Ending at, including.
 * @param {number} step
 */
function* count(from, to, step = 1) {
  for (let index = from; index <= to; index += step) {
    yield index;
  }
}

exports.count = count;

/**
 * Iterate through `source` by `step` at a time.
 * @param {Array<T>} source
 * @param {number} step
 */
function* by(source, step) {
  if (source.length < step) {
    throw new TypeError("`source.length` can not be bigger than `step`");
  }
  for (const i of count(0, source.length - 1, step)) {
    const acc = [];
    for (const j of count(i, i + step - 1)) {
      acc.push(source[j]);
    }
    yield acc;
  }
}

exports.by = by;

/**
 * Iterate through `source` taking a `size` forward in each iteration.
 * @param {Array<T>} source
 * @param {number} size
 */
function* cycle(source, size) {
  if (source.length < size) {
    throw new TypeError("`source.length` can not be bigger than `size`");
  }
  for (const i of count(0, source.length - 1)) {
    const acc = [];
    for (const j of count(i, i + size - 1)) {
      acc.push(source[j]);
    }
    yield acc;
  }
}

exports.cycle = cycle;
