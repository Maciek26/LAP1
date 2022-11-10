var hoverDivCamera1 = document.getElementById("hoverDivCam1")
var hoverBubbleCam1 = document.getElementById("hoverBubbleCam1")
var hoverBubbleCam2 = document.getElementById("hoverBubbleCam2")
var hoverBubbleCam3 = document.getElementById("hoverBubbleCam3")
var hoverBubbleArt = document.getElementById("hoverBubbleArt")
var artIconImage = document.getElementById("artIcon")
var cameraIcon = document.getElementById("camIcon")


function hoverDiv(id) {
    var data = id
    if (data == "camIcon") {
        hoverBubbleCam1.style.display = "block";
        hoverBubbleCam1.style.animation = "bubbleAppear 1.2s"
        hoverBubbleCam2.style.display = "block";
        hoverBubbleCam2.style.animation = "bubbleAppear2 1.2s"
        hoverBubbleCam3.style.display = "block";
        hoverBubbleCam3.style.animation = "bubbleAppear3 1.2s"
    } else if (data == "artIcon") {
        artIconImage.style.animation = "iconDown 1.2s";
        artIconImage.style.backgroundPositionY = "4.25vw"
        hoverBubbleArt.style.display = "block";
        hoverBubbleArt.style.animation = "bubbleAppearArt 1.2s"
    }
}

function hoverOff(id) {
    var data = id
    if (data == "hoverDivCam1") {
        hoverBubbleCam1.style.display = "none";
        hoverBubbleCam1.style.animation = "";
        hoverBubbleCam2.style.display = "none";
        hoverBubbleCam2.style.animation = "";
        hoverBubbleCam3.style.display = "none";
        hoverBubbleCam3.style.animation = "";
    } else if (data == "hoverDivArt") {
        artIconImage.style.animation = "";
        artIconImage.style.backgroundPositionY = "2vw"
        hoverBubbleArt.style.display = "none";
        hoverBubbleArt.style.animation = "";
    }
}