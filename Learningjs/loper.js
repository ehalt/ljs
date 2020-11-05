var animal1 = 'monkey';
var animal2 = 'bear';
var animal3 = 'tiger';

a = animal1 === 'monkey' && animal2 === 'bear';
a = animal1 === 'donkey' && animal2 === 'bear';

b = animal1  === 'monkey' || animal2 === 'bear' && animal3 === 'tiger';

console.log(a);
console.log(b);