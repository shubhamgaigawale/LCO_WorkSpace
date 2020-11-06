// var name = new Map();

// name.set(0,"zero");
// name.set(1,"one");
// name.set(2,"two");
// name.set(3,"three");

// // console.log(name);

// // for (let keys of name.keys()){
// //     console.log(`Keys are ${keys}`);   
// // };

// // for (let value of name.values()){
// //     console.log(`Values are ${value}`);   
// // }

// for (let [key, value] of name) {
//     console.log(`Keys are : ${key} and Values are: ${value}`);
// }

const user = {
    name : 'kavish',
    rollNo: 2018420774,
    role: 'Student'
}
// console.log(user.name);

const {name ,rollNo, role} = user;
console.log(name);