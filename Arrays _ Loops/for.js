var states = ["Maharashta", "Goa","Assam",1999,"Sikkim","Delhi"];

for (let i = 0; i < states.length;i++) {

    // if (typeof states[i] !== "string") break;
    
    if (typeof states[i] !== "string") continue;
    console.log(states[i]);    
}