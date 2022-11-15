var hoverDivCamera1 = document.getElementById("hoverDivCam1")
var hoverDivPanel = document.getElementById("hoverDivPanel")

var hoverBubbleCam1 = document.getElementById("hoverBubbleCam1")
var hoverBubbleCam2 = document.getElementById("hoverBubbleCam2")
var hoverBubbleCam3 = document.getElementById("hoverBubbleCam3")
var hoverBubbleArt = document.getElementById("hoverBubbleArt")
var hoverBubbleChip = document.getElementById("hoverBubbleChip")
var hoverBubblePanel = document.getElementById("hoverBubblePanel")

var cameraIcon = document.getElementById("camIcon")
var artIconImage = document.getElementById("artIcon")
var chipIconImage = document.getElementById("chipIcon")
var panelIconImage = document.getElementById("panelIcon")
var webIconImage = document.getElementById("webIcon")

var iframWeb = document.getElementById("iframeWeb")

var group1 = document.getElementById("group1")
var group2 = document.getElementById("group2")
var group3 = document.getElementById("group3")
var group4 = document.getElementById("group4")
var groupGian = document.getElementById("groupGian")
var groupEmile = document.getElementById("groupEmile")
i = 2

function scrollDown(id){
    var data = id
    if (data == "hoverBubbleCam1") {
        group1.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    } else if (data == "hoverBubbleCam2") {
        group2.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    } else if (data == "hoverBubbleCam3") {
        group3.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }//else if (data == "group4") {
      //  group4.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    //}
}

function displayNone(){
    hoverBubbleCam1.style.display = "none";
    hoverBubbleCam1.style.animation = "";
    hoverBubbleCam2.style.display = "none";
    hoverBubbleCam2.style.animation = "";
    hoverBubbleCam3.style.display = "none";
    hoverBubbleCam3.style.animation = "";
    hoverBubbleArt.style.display = "none";
    hoverBubbleArt.style.animation = "";
    hoverBubbleChip.style.display = "none";
    hoverBubbleChip.style.animation = "";
    hoverBubblePanel.style.display = "none";
    hoverBubblePanel.style.animation = "";
    panelIconImage.style.backgroundPositionY = "2vw"
}

function hoverDiv(id) {
    var data = id
    if (data == "camIcon") {
        displayNone()
        webIconImage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        panelIconImage.style.animation = "";
        hoverBubbleCam1.style.display = "block";
        hoverBubbleCam1.style.animation = "bubbleAppear 1.2s"
        hoverBubbleCam2.style.display = "block";
        hoverBubbleCam2.style.animation = "bubbleAppear2 1.2s"
        hoverBubbleCam3.style.display = "block";
        hoverBubbleCam3.style.animation = "bubbleAppear3 1.2s"
        hoverBubbleCam3.style.zIndex = "20"
    } else if (data == "artIcon") {
        displayNone()
        webIconImage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        artIconImage.style.animation = "iconDown 1.2s";
        artIconImage.style.backgroundPositionY = "4.25vw"
        hoverBubbleArt.style.display = "block";
        hoverBubbleArt.style.animation = "bubbleAppearArtChip 1.2s"
    } else if (data == "chipIcon") {
        displayNone()
        webIconImage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        chipIconImage.style.animation = "iconDown 1.2s";
        chipIconImage.style.backgroundPositionY = "4.25vw"
        hoverBubbleChip.style.display = "block";
        hoverBubbleChip.style.animation = "bubbleAppearArtChip 1.2s"
    } else if (data == "panelIcon") {
        // close the other bubbles just in case it isnt already
        displayNone()
        hoverDivPanel.style.display = "flex"
        panelIconImage.style.animation = "iconHover 12s Infinite";
        panelIconImage.style.backgroundPositionY = ""
        hoverBubblePanel.style.display = "block"
        hoverBubblePanel.style.animation = "bubbleAppearPanel 1.2s"
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

    } else if (data == "hoverDivChip") {
        chipIconImage.style.animation = "";
        chipIconImage.style.backgroundPositionY = "2vw"
        hoverBubbleChip.style.display = "none"
        hoverBubbleChip.style.animation = "";

    } else if (data == "hoverDivPanel") {
        panelIconImage.style.animation = "";
        panelIconImage.style.backgroundPositionY = "2vw"
        hoverBubblePanel.style.display = "none"
        hoverBubblePanel.style.animation = "";
    }
}
