// Offer Bar
var offerBar = document.querySelector(".offer-bar")
document.getElementById("offer-close").addEventListener("click", function () {
    offerBar.style.display = "none"
})

// Side Nav Bar
var sideNavMenu = document.getElementById("side-navbar-activate")
var sideNavBar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "0px"
})
document.getElementById("side-navbar-close").addEventListener("click", function () {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})

// Slider
const sliderLeft = document.getElementById("slider-left-activate");
const sliderRight = document.getElementById("slider-right-activate");
const sliderImage = document.querySelector(".slider-image-container");
const images = document.querySelectorAll(".slider-image-container img");
const totalImages = images.length;
const imageWidth = 100; // in vw
let sliderMargin = 0;

// Function to update slider position
function updateSliderPosition() {
    sliderImage.style.marginLeft = `-${sliderMargin}vw`;
}

// Move right
sliderRight.addEventListener("click", function () {
    sliderMargin += imageWidth;
    if (sliderMargin >= totalImages * imageWidth) {
        sliderMargin = 0;
    }
    updateSliderPosition();
});

// Move left
sliderLeft.addEventListener("click", function () {
    sliderMargin -= imageWidth;
    if (sliderMargin < 0) {
        sliderMargin = (totalImages - 1) * imageWidth;
    }
    updateSliderPosition();
});
