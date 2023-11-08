//You are given two interior angles (in degrees) of a triangle.

//Write a function to return the 3rd.

function otherAngle(a, b) {
  let triangle = 180
  let aPlusB = a + b
  let total = triangle - aPlusB
  
  return total;
}