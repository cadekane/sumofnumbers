function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3]));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
console.log(sumWhile([1, 2, 3]));

// don't know how to do the recursion…
function sumRecursion(list, index = 0) {
  // Base case: when the index is equal to the length of the array
  if (index === list.length) {
    return 0;
  }
  // Recursive case: add the current element to the sum of the rest of the elements
  return list[index] + sumRecursion(list, index + 1);
}
console.log(sumRecursion([1, 2, 3], 0));
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
console.log(sumTheSimpleWay([1, 2, 3]));
