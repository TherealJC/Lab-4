//Create a function that returns a base 2 (binary) represetation of a base 10 (decimal) string number.


function base(number) {
var output = number.toString(2);       //toString(2) converts base 10 (decimal) input to base 2 (binary)
return output
}
console.log(base(2))
console.log(base(5))
console.log(base(10))
