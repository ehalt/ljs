// var name = ''

// var fullname = ''

// if (name.length === 0) {
//     fullname = 'torikus sadik'
// }
// else {
//     fullname = name
// }


var name = ''
var fullname = name || 'torikus sadik'
console.log(fullname) 

var isok = true
isok && console.log('everything is okay')