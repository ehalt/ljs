function print(firstname) {
    console.log('hello ${firstname}');
}

print('jenny');

function createemail(firstname, price) {
    let shipping = 5.95;
    console.log('hi ${firstname}! Thanks!
    Total: $${price}
    Shipping: $${shipping}
    Grand Total: $${price + shipping}
    ');
}
createemail('guy', 100);