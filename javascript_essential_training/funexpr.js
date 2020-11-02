// Immediately invoked functional expressions/

// var thebiggest = (function(a,b) {
//     var result;
//     a > b ? result = ['a', a]: result = ['b', b];
//     return result;
// })(firstFraction, SecondFraction)

// var firstFraction = 7/9;
// var SecondFraction = 13/25;

// console.log(thebiggest);

var firstFraction = 7/9;
var SecondFraction = 13/25;


var thebiggest = (function(a,b) {
    var result;
    a > b ? result = ['a', a]: result = ['b', b];
    return result;
})(firstFraction, SecondFraction)

console.log(thebiggest);