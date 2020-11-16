let person1 = {name: 'john', age: 22}
let person2 = {name: 'mary', age: 26}
let sayhi = function() {
    console.log('hi, ' + this.name);
}
sayhi.call(person1)
sayhi.call(person2)