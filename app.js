// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);



  //Part 1: Math problems//
  //Check if all the numbers are divisible by 5
  const isDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ===0;
  console.log(isDivisibleBy5)

  //Check if the first is larger than the last
  const isFirstLargerThanLast = n1 > n4;
  console.log(isFirstLargerThanLast)

  //Following Chain
  const arithmeticChain = (n1 - n2);
  console.log ('subtraction from first number to last: ${arithmeticChain}.')
  const mulipleOf3 = (arithmeticChain * 3);
  console.log ("multiplication of 3 : ${mulipleOf3}.");
  const remainder = (mulipleOf3 % n4);
  console.log ("remainding : ${remainder}.");

  //Part 2: Practical Math

  const totalDistance = 1500 //miles
  const fuelBudget = 175  //dollars
  const costPerGallon = 3  // dollars

  const fuelEffeciency55mph = 30  //miles per gallon  
  const fuelEffenciency60mph = 28  //miles per gallon
  const fuelEffeciency75mph= 23  //miles per gallon

  const speed55mph = 55  //miles per hour
  const speed60mph = 60  //miles per hour
  const speed75mph = 75  // miles per hour

 const gallonsNeeded55mph = totalDistance / fuelEffeciency55mph 
 const gallonsNeeded60mph = totalDistance / fuelEffenciency60mph
 const gallonsNeeded75mph = totalDistance / fuelEffeciency75mph
 console.log ("Gas needed to fuel the entire trip : ${gallonsNeeded55mph}")

 const totalCost55mph = gallonsNeeded55mph * costPerGallon
 const totalCost60mph = gallonsNeeded60mph * costPerGallon
 const totalCost75mph = gallonsNeeded75mph * costPerGallon

 const isBudgetEnough55mph = totalCost55mph <= fuelBudget
 const isBudgetEnough60mph = totalCost60mph <= fuelBudget
 const isBudgetEnough75mph = totalCost75mph <= fuelBudget

 const tripTime55mph = totalDistance / speed55mph
 const tripTime60mph = totalDistance / speed60mph
 const tripTime75mph = totalDistance / speed75mph

  
