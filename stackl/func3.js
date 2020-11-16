let message = {
    name : 'john',
    regularFunction: function() {
        console.log('hello ' + this.name);
    },
    arrowFunction: () => console.log('hi ' + this.name)
}
message.regularFunction();
message.arrowFunction();