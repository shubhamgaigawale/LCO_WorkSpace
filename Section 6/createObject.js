// var obj1 = {a:1,
//     b: 2,
//     c: 5
// };

// var obj2 = {a:1,
//     b:4
// };

// var tot = Object.assign(obj1,obj2);
// console.log(tot);

// // console.log(obj1);

var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is: ${this.name}`);
    },
};

var kavish = Object.create(User);
console.log(kavish);

kavish.name = "Kavish";
kavish.getUserName();