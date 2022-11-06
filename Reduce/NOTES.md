# Reduce() Method

A super-useful method for processing arrays, the .reduce()

    myArray = [1,2,3,4,5]

    const sum = myArray.reduce((accumulator, current) => {
      // You can name these two arguments whatever you want, but
      // ... the first will start at '0' and continue to store whatever is returned from the "return" statement (below)
      // ... the second will store the first element of the targeted array ... unless a second argument __

      // your logic goes here
      return // .reduce() *MUST* return something - even if it simply "returns"
    }, 0 // .reduce() can take a primative or object as its second argument; this will be stored in the accumulator.
    )

Example:

    const array1 = [5, 10, 8, 3];
    const sum = array1.reduce((acc, cur) => {
      return acc + cur;
    });
    // sum will equal 26
