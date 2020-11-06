const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector("pink");

const centre = document.querySelector("centre");

// console.log(window.getComputedStyle(red).backgroundColor);

const getColor = (anElement) => {
    // return window.getComputedStyle(anElement).backgroundColor;
    return window.getComputedStyle(anElement, null);


};

// getColor();

// console.log(getColor(pink));

// var cyanColorElement = getColor(cyan);

// cyan.addEventListener("mouseenter", () => {
//     centre.getComputedStyle.background = cyanColorElement;
// }
// );

const magicColorChange = (element, color) => {
    return element.addEventListener("mouseenter",() => {
        centre.style.background = color;
    })

}

magicColorChange(red, getColor(red));
magicColorChange(cyan, getColor(cyan));
magicColorChange(violet, getColor(violet));
magicColorChange(orange, getColor(orange));
magicColorChange(pink, getColor(pink));