var navHome = document.getElementById("navHome");
var navAbout = document.getElementById("navAbout");
var navTemp1 = document.getElementById("navTemp1");
var navTemp2 = document.getElementById("navTemp2");
var line1 = document.getElementById("line1")
var line2 = document.getElementById("line2")
var BMenu = document.getElementById("BMenu")
var BMLine1 = document.getElementById("BMLine1")
var BMLine2 = document.getElementById("BMLine2")
var BMLine3 = document.getElementById("BMLine3")

var i = 0
function onhover(id) {
    i += 1
    var data = id
    if (i == 3 || i == 2) {
    var data = id
    var marginLeft = ""
    if (data == "navHome") {
        marginLeft = "51.5vw"
    } else if ( data == "navAbout") {
        marginLeft = "61.5vw";
    } else if (data == "navTemp1") {
        marginLeft = "71.5vw";
    } else if (data == "navTemp2"){
        marginLeft = "81.5vw";
    }
    line1.style.marginLeft = marginLeft
    line2.style.marginLeft = marginLeft
    line1.style.display = "flex";
    line2.style.display = "flex";
    line1.style.animation = "lineAppear1 1s";
    line2.style.animation = "lineAppear2 1s";
    return;
        }
    if (data == "grid1" && line1.style.marginLeft == "51.5vw"){
        line1.style.marginLeft = "61.5vw"
        line1.style.animation = "lineshiftRight1 1s"
        line2.style.marginLeft = "61.5vw"
        line2.style.animation = "lineshiftRight1 1s"
    } else if (data == "grid1" && line1.style.marginLeft == "61.5vw") {
        line1.style.marginLeft = "51.5vw"
        line1.style.animation = "lineshiftLeft1 1s"
        line2.style.marginLeft = "51.5vw"
        line2.style.animation = "lineshiftLeft1 1s"
    } else if (data == "grid2" && line1.style.marginLeft == "61.5vw") {
        line1.style.marginLeft = "71.5vw"
        line1.style.animation = "lineshiftRight2 1s"
        line2.style.marginLeft = "71.5vw"
        line2.style.animation = "lineshiftRight2 1s"
    } else if (data == "grid2" && line1.style.marginLeft == "71.5vw") {
        line1.style.marginLeft = "61.5vw"
        line1.style.animation = "lineshiftLeft2 1s"
        line2.style.marginLeft = "61.5vw"
        line2.style.animation = "lineshiftLeft2 1s"
    } else if (data == "grid3" && line1.style.marginLeft == "71.5vw") {
        line1.style.marginLeft = "81.5vw"
        line1.style.animation = "lineshiftRight3 1s"
        line2.style.marginLeft = "81.5vw"
        line2.style.animation = "lineshiftRight3 1s"
    } else if (data == "grid3" && line1.style.marginLeft == "71.5vw") {
        line1.style.marginLeft = "81.5vw"
        line1.style.animation = "lineshiftLeft3 1s"
        line2.style.marginLeft = "81.5vw"
        line2.style.animation = "lineshiftLeft3 1s"
    } else if (data == "grid3" && line1.style.marginLeft == "81.5vw") {
        line1.style.marginLeft = "71.5vw"
        line1.style.animation = "lineshiftLeft4 1s"
        line2.style.marginLeft = "71.5vw"
        line2.style.animation = "lineshiftLeft4 1s"
    }  else if (data == "grid1" && line1.style.marginLeft == "81.5vw") {
        line1.style.marginLeft = "51.5vw"
        line1.style.animation = "lineshiftLeft5 1s"
        line2.style.marginLeft = "51.5vw"
        line2.style.animation = "lineshiftLeft5 1s"
    }  else if (data == "grid1" && line1.style.marginLeft == "71.5vw") {
        line1.style.marginLeft = "51.5vw"
        line1.style.animation = "lineshiftLeft6 1s"
        line2.style.marginLeft = "51.5vw"
        line2.style.animation = "lineshiftLeft6 1s"
    }  else if (data == "grid2" && line1.style.marginLeft == "81.5vw") {
        line1.style.marginLeft = "61.5vw"
        line1.style.animation = "lineshiftLeft7 1s"
        line2.style.marginLeft = "61.5vw"
        line2.style.animation = "lineshiftLeft7 1s"
    } else if (data == "grid2" && line1.style.marginLeft == "51.5vw") {
        line1.style.marginLeft = "61.5vw"
        line1.style.animation = "lineshiftLeft8 1s"
        line2.style.marginLeft = "61.5vw"
        line2.style.animation = "lineshiftLeft8 1s"
    } else if (data == "grid3" && line1.style.marginLeft == "51.5vw") {
        line1.style.marginLeft = "81.5vw"
        line1.style.animation = "lineshiftLeft9 1s"
        line2.style.marginLeft = "81.5vw"
        line2.style.animation = "lineshiftLeft9 1s"
    } else if (data == "grid3" && line1.style.marginLeft == "61.5vw") {
        line1.style.marginLeft = "81.5vw"
        line1.style.animation = "lineshiftLeft10 1s"
        line2.style.marginLeft = "81.5vw"
        line2.style.animation = "lineshiftLeft10 1s"
    }
}

