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
const minimumAdjacentDifference = (arr, n) => {
  // Initialising the
  // minimum difference
  //declaring each towers height and costs
  let hSubI = [];
  let mSubI = [];
  let finalCost = 0;
  for (let index = 0; index < n; index++) {
    if (index % 2 === 0) {
      hSubI.push(arr[index]);
    } else {
      mSubI.push(arr[index]);
    }
  }

  const tower = [];
  for (let index = 0; index < hSubI.length; index++) {
    tower[index] = [hSubI[index], mSubI[index]];
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
    //console.log(positionsRepeatedWithCosts); to verify recursion result
    //console.log(positionsRepeatedWithCosts); to verify recursion result
  } while (positionsRepeatedWithCosts.length > 0);
  //console.log(tower); to test new tower and verify visually
  return finalCost;
};

// Driver code
/* let k = 1; */
let arr = [3,7,3,8, 10,14]; //test cases on a plain array
//[2, 4, 2, 1, 3, 5, 3, 6]
//[2, 4, 2, 1, 3, 5]
//[3,7,3,8, 10,14];
let n = arr.length;
let optimizedCost = minimumAdjacentDifference(arr, n);
console.log(optimizedCost);
