// Side Nav Bar
var sideNavMenu = document.getElementById("side-navbar-activate")
var sideNavBar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "0px"
})
document.getElementById("side-navbar-close").addEventListener("click", function () {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})
