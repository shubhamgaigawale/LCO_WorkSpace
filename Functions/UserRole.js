var getUserRole = function(name, role){

    switch(role) {
        case "admin":
            return `${name} has access to everything`;
            break;

        case "sub-admin":
            return `${name} has access to create and delete content`;
            break;

        case "test-prep":
            return `${name} has access to create and delete tests`;
            break;

        case "user":
            return`${name} has access to content`;
            break;

        default:
            return`${name} is a trial user`;
            break;
    }
}

// console.log(getUserRole("Kavish","admin"));

var user = getUserRole("kavish","user");
console.log(user);