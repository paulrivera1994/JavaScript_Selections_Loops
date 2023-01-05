console.log("Hello World!\n==========\n");

// Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// for (i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// let a = "FIZZ";
// let b = "BUZZ";
// for (i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i + a + b);
//   } else if (i % 3 == 0) {
//     console.log(i + a);
//   } else if (i % 5 == 0) {
//     console.log(i + b);
//   } else {
//     console.log(i);
//   }
// }

// Exercise 3
let i = 1;
while (i <= 100) {
  if (i % 2 != 0) {
    console.log(i);
  }

  //UPDATE i, or else it will go infinite
  i++;
}
do {
  while (i <= 100) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i, "FIZZBUZZ");
    } else if (i % 3 == 0) {
      console.log(i, "FIZZ");
    } else if (i % 5 == 0) {
      console.log(i, "BUZZ");
    }
    i++;
  }
} while (i <= 100);

//Exercise 4
// creates a random number between 0 and 500
let value = Math.round(Math.random() * 500);
// creates a random number between 100 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);

for (x = 0; x <= n; x++) {
  if (x == value) {
    console.log("Found Value!");
    break;
  } else if (x == n) {
    console.log("Did not find value");
  }
}
// Exercise 5
console.log("EXERCISE 5:\n==========\n");
// creates a random number between 1 and 10
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
// creates a random number between 1 and 1000
let end = Math.round(Math.random() * (1000 - 1) + 1);
// creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1);

for (i = start; i <= end; i++) {
  if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % fizzDivisor == 0) {
    console.log(i, "FIZZ");
  } else if (i % buzzDivisor == 0) {
    console.log(i, "BUZZ");
  }
}
