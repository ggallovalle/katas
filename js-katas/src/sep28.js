/**
 * @surrender
 * @param {any[]} first
 * @param {any[]} second
 */
function sameStructureAs(first, second) {
  if (first.length === 0) return true;

  const loop = (f, s, h, t) => {
    if (first.length === 0) return true;

    if (first.length !== second.length) return false;
    const firstIsArray = Array.isArray(first);
    const secondIsArray = Array.isArray(second);
    if (firstIsArray != secondIsArray) return false;

    for (const iterator of f.keys()) {
        
    }
  };
  return loop(first.slice(1), second.slice(2), first[0], second[0]);
  //   return sameStructureAs(first.slice(1), second.slice(1));
}

exports.sameStructureAs = sameStructureAs;
