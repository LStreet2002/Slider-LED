


requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});
const fetch = require('node-fetch');
var requirejs = require('requirejs');



function updateSliderr(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmountr");
    sliderDiv.innerHTML = slideAmount;
}

function updateSliderb(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmountb");
    sliderDiv.innerHTML = slideAmount;
}
function updateSliderg(slideAmount) {
    var sliderDiv = document.getElementById("sliderAmountg");
    sliderDiv.innerHTML = slideAmount;
}
function box() {
    var red = document.querySelector("#sliderAmountr").innerHTML
    var blue = document.querySelector("#sliderAmountb").innerHTML
    var green = document.querySelector("#sliderAmountg").innerHTML

    var RGB = {
        "red": red,
        "blue": blue,
        "green": green
    }
    JSON.stringify(RGB);

    document.querySelector(".colour").style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";

}






