// Given sides of triangle
let x = 9, y = 8, z = 9;

// Check for equilateral triangle
if (x == y && y == z)
    console.log("Equilateral Triangle");

// Check for isosceles triangle
else if (x == y || y == z || z == x)
    console.log("Isosceles Triangle");

// Otherwise scalene triangle
else
    console.log("Scalene Triangle");


