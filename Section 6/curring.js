const user = {
    firstName : "kavish",
    lastName : "bahadure",
    prn : 2018420774,
    getInfo : function() {
        console.log(
            `First name is ${this.firstName}
            Last name is ${this.lastName}
            And prn is ${this.prn}
            `);
    },
};

const user2 = {
    firstName : "shuttu",
    lastName : "bahadure",
    prn : 2018420886,
}

// console.log(user);

// user.getInfo();

// console.log(user2);

// user.getInfo.bind(user2)();

// var details = user.getInfo.bind(user2);
// details();

user.getInfo.call(user2);

