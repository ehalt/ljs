
var a = {
    name:'abcd',
    age: 19
}

var v = JSON.stringify(a);
console.log(v);

var ob = JSON.parse(v);
ob;
var i = ob.name;
i;
