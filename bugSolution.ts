function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'string') {
    return a + parseFloat(b);
  } else if (typeof a === 'string' && typeof b === 'number') {
    return parseFloat(a) + b;
  } else {
      return 'Invalid input';
  }
}

let result1 = add(5, 5); // 10
let result2 = addSafe("hello", 5); // "hello5"
let result3 = addSafe(5, "5"); // 10
let result4 = addSafe("5", "5"); // "55"
let result5 = addSafe("hello", "world"); // "helloworld"
let result6 = addSafe(5, "hello"); //"Invalid input"
console.log(result1, result2, result3, result4, result5, result6); 