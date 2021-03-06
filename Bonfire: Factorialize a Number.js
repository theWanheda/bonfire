/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
  var facto = 1;
  for (i = 1; i <= num; i++) 
  {
    facto *= i;
  }
  return facto;
}

factorialize(5); //returns 120
