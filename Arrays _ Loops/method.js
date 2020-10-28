var mobile = {

    name : "iPhone",
    brand : "apple",
    yearOfRelease : "2019",

    productionCountry : "PCR",

    colors : [],
    color : function(colorName){
        this.colors.push(colorName);
    },

    // getDetails : function(){
    //     return `${this.name} of brand ${this.brand} comes in ${this.colors.length} colors`;
    // },

    info : function(){
        return `${this.name} of brand ${this.brand} was released in ${this.yearOfRelease}. It comes in ${this.colors.length} and was made in ${this.productionCountry}`

    }

};

var colors = true;

// console.log(mobile.getDetails());


console.log(mobile.info());
mobile.color("golden");
mobile.color("black");

// console.log(mobile.getDetails());

console.log(mobile.info());