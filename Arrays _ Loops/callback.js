// function number(no){

//     // return  `The number is ${no}`

//     console.log("The number is", no);
// }

// number(2)

// var isEven = function (number){

// var isEven = (number) => {

//     // if (number%2 === 0){
//     //     return  `Its true`;
//         // console.log("Its true");
//         return number%2 === 0 ;


// } 

// console.log(isEven(2));

// var array = [2,4,6,8].every(isEven);
// console.log(array);



// var array = [2,4,6,8].every((e) => {
//     return e%2 ===0;
// })

// console.log(array);


var array = [2,4,6,8].every( (e) => (e%2 ===0 ));
console.log(array);