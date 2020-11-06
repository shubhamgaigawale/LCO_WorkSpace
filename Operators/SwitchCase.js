var user = "kavish";

switch(user) {

    case "admin":
        console.log("You get full access");
        break;
        
    case "subadmin":
        console.log("You get access to create and delete courses");
        break;

    case "testprep":
        console.log("You get access to create and delete tests");
        break;

    case "user":
        console.log("You have access to the content");
        break;

    default:
        console.log("You are a trial user");
        break;    
    }