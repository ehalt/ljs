var str = 'some string'

var length = 0

while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}

console.log(length)