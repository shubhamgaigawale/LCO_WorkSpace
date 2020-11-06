// // // Self Executing Anonymous Function

// // (function sayHello() {
// //     console.log("Hello");
// //     console.log("Hello Again");
// // })

// // ();

// function init() {
//     var name = "kavish";
//     console.log("Hello");
//     function firstName() {
//         console.log(name);
//     };
//     return firstName();
// };

// // init();
// // console.log(name);

// var namae = init();

// namae();

function doAddition(x) {
    return function (y) {
        return x + y;
    };
};

// var add = doAddition(5);
// console.log(add(4));

console.log(doAddition(4)(4));
