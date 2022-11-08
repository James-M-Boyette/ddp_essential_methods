// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const array1 = [-1, 3, 10, 11, -22, 500 ] RETURNS newArray = [10, 11, 500]

const array1 = [-1, 3, 10, 11, -22, 500];

const above5 = (inputArray) => {
  return inputArray.filter((x) => x > 5);
};

console.log("1) ", above5(array1));

// 2) Given an array of numbers, return a new array that only includes the even numbers.

// const array2 = [-1, 3, 10, 11, -22, 500 ] RETURNS newArray = [-22, 10, 500]

const array2 = [-1, 3, 10, 11, -22, 500];

const evenNumbers = (inputArray) => {
  // Both work ...
  // return inputArray.filter((x) => (x % 2 === 0 ? x : null));
  return inputArray.filter((x) => x % 2 === 0);
};

console.log("2) ", evenNumbers(array2));

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

// const array3 = ["I", "like", "bagels", "with", "cream cheese" ] RETURNS newArray = [I, Like, With]

const array3 = ["I", "like", "bagels", "with", "cream cheese"];

const fewerThanFive = (inputArray) => {
  return inputArray.filter((x) => x.length < 5);
};

console.log("3) ", fewerThanFive(array3));

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const array4 = [
//   {
//     firstName: "Brad",
//     lastName: "Pitt",
//     club: "Ocean's Eleven",
//     age: 42,
//   },
//   {
//     firstName: "Matt",
//     lastName: "Damon",
//     club: "Ocean's Eleven",
//     age: 38,
//   },
//   {
//     firstName: "Timmy",
//     lastName: "Benson",
//     club: "Toys R Us",
//     age: 7,
//   },
//   {
//     firstName: "George",
//     lastName: "Clooney",
//     club: "Ocean's Eleven",
//     age: 53,
//   },
//   {
//     firstName: "Andy",
//     lastName: "Garcia",
//     club: "MGM Grand",
//     age: 49,
//   },
//   {
//     firstName: "Julia",
//     lastName: "Roberts",
//     club: "MGM Grand",
//     age: 37,
//   },
// ];
// If we look for those in Ocean's Eleven, should return three people (Matt, Brad, & George)

const array4 = [
  {
    firstName: "Brad",
    lastName: "Pitt",
    club: "Ocean's Eleven",
    age: 42,
  },
  {
    firstName: "Matt",
    lastName: "Damon",
    club: "Ocean's Eleven",
    age: 38,
  },
  {
    firstName: "Timmy",
    lastName: "Benson",
    club: "Toys R Us",
    age: 7,
  },
  {
    firstName: "George",
    lastName: "Clooney",
    club: "Ocean's Eleven",
    age: 53,
  },
  {
    firstName: "Andy",
    lastName: "Garcia",
    club: "MGM Grand",
    age: 49,
  },
  {
    firstName: "Julia",
    lastName: "Roberts",
    club: "MGM Grand",
    age: 37,
  },
];

const heistTeam = (inputArray) => {
  let team = inputArray.filter((x) => x.club === "Ocean's Eleven");
  return team.reduce((acc, cur) => {
    acc.push(cur.firstName);
    return acc;
  }, []);
};

console.log("4) ", heistTeam(array4));

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

// const array5 = [
//   {
//     firstName: "Brad",
//     lastName: "Pitt",
//     club: "Ocean's Eleven",
//     age: 42,
//   },
//   {
//     firstName: "Matt",
//     lastName: "Damon",
//     club: "Ocean's Eleven",
//     age: 38,
//   },
//   {
//     firstName: "Timmy",
//     lastName: "Benson",
//     club: "Toys R Us",
//     age: 7,
//   },
//   {
//     firstName: "George",
//     lastName: "Clooney",
//     club: "Ocean's Eleven",
//     age: 53,
//   },
//   {
//     firstName: "Andy",
//     lastName: "Garcia",
//     club: "MGM Grand",
//     age: 49,
//   },
//   {
//     firstName: "Julia",
//     lastName: "Roberts",
//     club: "MGM Grand",
//     age: 37,
//   },
// ];
// RETURNS everyone but Timmy (5 people)

const array5 = [
  {
    firstName: "Brad",
    lastName: "Pitt",
    club: "Ocean's Eleven",
    age: 42,
  },
  {
    firstName: "Matt",
    lastName: "Damon",
    club: "Ocean's Eleven",
    age: 38,
  },
  {
    firstName: "Timmy",
    lastName: "Benson",
    club: "Toys R Us",
    age: 7,
  },
  {
    firstName: "George",
    lastName: "Clooney",
    club: "Ocean's Eleven",
    age: 53,
  },
  {
    firstName: "Andy",
    lastName: "Garcia",
    club: "MGM Grand",
    age: 49,
  },
  {
    firstName: "Julia",
    lastName: "Roberts",
    club: "MGM Grand",
    age: 37,
  },
];

const notUnderAge = (inputArray) => {
  return inputArray.filter((x) => x.age >= 18);
};

console.log("5) ", notUnderAge(array5));
