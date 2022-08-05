/**
 * @param {array} tower   array containing the current state of the tower, its height and its cost.
 * @return array of objects whose keys are the position on which the repeated height was found and its value/cost to increase height by 1.
 */
const checkRepeatedValues = (tower) => {
  const repeatedValues = [];
  for (let j = 0; j < tower.length; j++) {
    if (j === tower.length - 1) {
      if (tower[(0, j)][0] === tower[(0, j - 1)][0]) {
        repeatedValues.push({ position: j, value: tower[(0, j)][1] });
      }
    } else if (j === 0) {
      if (tower[(0, j)][0] === tower[(0, j + 1)][0]) {
        repeatedValues.push({ position: j, value: tower[(0, j)][1] });
      }
    } else {
      if (tower[(0, j)][0] === tower[(0, j + 1)][0]) {
        repeatedValues.push({ position: j, value: tower[(0, j)][1] });
      }
      if (tower[(0, j)][0] === tower[(0, j - 1)][0]) {
        repeatedValues.push({ position: j, value: tower[(0, j)][1] });
      }
    }
  }
  return repeatedValues;
};
/**
 * @param {very_long_type} name           Description.
 * @param {type}           very_long_name Description.
 */
const minCost = (N, H, M) => {
  // Initialising the
  // minimum difference
  let finalCost = 0;
  const tower = [];
  for (let index = 0; index < H.length; index++) {
    tower[index] = [H[index], M[index]];
  }
  let positionsRepeatedWithCosts = null;
  do {
    positionsRepeatedWithCosts = checkRepeatedValues(tower);
    let values = positionsRepeatedWithCosts.map(function (positions) {
      return positions.value;
    });
    let min = Math.min.apply(null, values);
    let positionToChange = positionsRepeatedWithCosts.filter(
      (el) => el.value === min
    );
    if (positionToChange.length > 0) {
      positionToChange = positionToChange[0].position;
      tower[(0, positionToChange)][0] = tower[(0, positionToChange)][0] + 1;
      finalCost = min + finalCost;
    } else {
      positionToChange = null;
    }
  } while (positionsRepeatedWithCosts.length > 0);
  return finalCost;
};

let arr = process.argv[2];

var temp = arr.trim("\n").split(/\n|\s/);
var N = parseInt(temp[0]);
var H = [];
for (let index = 1; index < 1 + N; index++) {
  H.push(parseInt(temp[index]));
}
var M = [];
for (let index = 1 + N; index < 1 + N + N; index++) {
  M.push(parseInt(temp[index]));
}
let n = arr.length;
let optimizedCost = minCost(N, H, M);
console.log(`Optimized cost : ${optimizedCost}`);
