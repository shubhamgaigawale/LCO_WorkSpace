var User = function(firstName, present) {
    this.firstName = firstName;
    this.present = present;
    this.attendance =  function () {
        console.log(`Attendace of ${firstName} is: ${present}`);
    };    
};


User.prototype.getfirstName = function () {
    console.log(`First Name is: ${this.firstName}`);
}

var kavish = new User ("Kavish",0);
// kavish.attendance();
// console.log(kavish.firstName);

// kavish.getfirstName();

if (kavish.hasOwnProperty("firstName")) {
    kavish.getfirstName();
}





