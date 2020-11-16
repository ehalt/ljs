function addall() {
    var sum = 0
    for ( var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
var result = addall(1, 2, 3, 4, 5)
console.log(result)