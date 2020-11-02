//====================================
// const:
// Constant
// can't be changed once defined
//=====================================
// let
// Block scope variable
// Smaller scope than var
//======================================


// const myconst = 5;
// console.log(myconst);
// // myconst = 6;



// function logscope() {
//     var localvar = 2;

//     console.log("logScope localvar: ", localvar);
// }
// logscope();


function logscope() {
    var localvar = 2;

    if (localvar) {
        var localvar = "I'm different";
        console.log("nested localVar:", localvar);
    }
    console.log("logScope localvar", localvar);
}
logscope();
