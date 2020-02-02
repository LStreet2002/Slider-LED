







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

    document.querySelector(".colour").style.backgroundColor = "rgb(" + red + "," + blue + "," + green + ")";

}






