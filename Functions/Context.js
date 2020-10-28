//Example of Global Context

tipper(5);

function tipper(a){

    var bill = parseInt(a);
    console.log(bill+5);
}

// Example of Execution Context

// bigTipper(50);

// var bigTipper = function (b){
    
//     var bill = parseInt(b);
//     console.log(bill+10);
// }

console.log(myName);

var myName = "Kavish";


function sayName(){
    var myName = "Mr.B.";
    console.log(myName);
}

sayName();

console.log(myName);





