var a = 5/7;
var b = 18/25;

var thebiggest = function() {
    var result;
    a > b ? result = ['a', a] : result = ["b", b];
    console.log(result);
}
thebiggest();