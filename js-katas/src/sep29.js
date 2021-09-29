function add(n) {
  const result = (x) => n + x;
  result.valueOf = (x) => n + x;
  return;
}

exports.add = add;

function josephusSurvivor(n, k) {}

exports.josephusSurvivor = josephusSurvivor;
