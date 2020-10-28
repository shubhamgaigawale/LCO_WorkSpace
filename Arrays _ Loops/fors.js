const names = [
    "Netflix",
    "Amazon",
    "Google",
    "Youtube",
];

// FOREACH
// names.forEach( (n) => (console.log(n)) );

//FOR OF
// for (const n of names){
//     console.log(n);
// } 

//FOR IN
const name ={
    ig:"Instagram",
    fb:"Facebook",
    yt:"Youtube",
    sc:"Snapchat"
}
for(n in name){
    console.log(`Key is: ${n} and value is: ${name}`);
}