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

function hoverDiv(id) {
    var data = id
    if (data == "camIcon") {
        webIconImage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        panelIconImage.style.animation = "";
        panelIconImage.style.backgroundPositionY = "2vw"
        hoverBubblePanel.style.display = "none"
        hoverBubblePanel.style.animation = "";
        hoverBubbleCam1.style.display = "block";
        hoverBubbleCam1.style.animation = "bubbleAppear 1.2s"
        hoverBubbleCam2.style.display = "block";
        hoverBubbleCam2.style.animation = "bubbleAppear2 1.2s"
        hoverBubbleCam3.style.display = "block";
        hoverBubbleCam3.style.animation = "bubbleAppear3 1.2s"
        hoverDivPanel.style.display = "none"
        hoverBubbleCam3.style.zIndex = "20"
    } else if (data == "artIcon") {
        webIconImage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        artIconImage.style.animation = "iconDown 1.2s";
        artIconImage.style.backgroundPositionY = "4.25vw"
        hoverBubbleArt.style.display = "block";
        hoverBubbleArt.style.animation = "bubbleAppearArtChip 1.2s"
    } else if (data == "chipIcon") {
        webIconImage.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
        chipIconImage.style.animation = "iconDown 1.2s";
        chipIconImage.style.backgroundPositionY = "4.25vw"
        hoverBubbleChip.style.display = "block";
        hoverBubbleChip.style.animation = "bubbleAppearArtChip 1.2s"
    } else if (data == "panelIcon") {
        // close the cam thing just in case it isnt already
        hoverDivPanel.style.display = "flex"
        hoverBubbleCam1.style.display = "none";
        hoverBubbleCam1.style.animation = "";
        hoverBubbleCam2.style.display = "none";
        hoverBubbleCam2.style.animation = "";
        hoverBubbleCam3.style.display = "none";
        hoverBubbleCam3.style.animation = "";
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
const videoID = "IBqUfixaLS8"
var thumbnailGian = document.getElementById("thumbnailGian")
    thumbnailGian.addEventListener("click", function (){
    groupGian.removeChild(thumbnailGian)
        const responsiveVideoContainer = document.createElement("div");
        responsiveVideoContainer.classList.add(
            "embed-responsive",
            "embed-responsive-16by9"
        );
        const videoIframe = document.createElement("iframe");

        videoIframe.classList.add("embed-responsive-item");

        videoIframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1`;

        videoIframe.setAttribute("allow", "autoplay");

        responsiveVideoContainer.appendChild(videoIframe);

        thumbnailGian.appendChild(responsiveVideoContainer);
})

//
// var displayFrame = false
// var load = window.frames[0].stop()
//
// function displayWebsite(){
//     var buttonLoad = document.getElementById("buttonLoad")
//     var closeButton = document.getElementById("closeButton")
//     var linkOpen = document.getElementById("linkOpen")
//     linkOpen.style.display = "flex"
//     buttonLoad.style.display = "flex"
//     closeButton.style.display = "none"
//     if (displayFrame == false) {
//         linkOpen.style.display = "none"
//         buttonLoad.style.display = "none"
//         closeButton.style.display = "flex"
//         displayFrame = true
//         console.log("nope")
//         document.getElementById("frameWeb").innerHTML = "<iframe src='https://emilewaech.wixsite.com/studienheim' style='z-index:1; display: flex;width: 100vw; height: 50vw; margin-top: 5vw;'>"
//         groupEmile.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
//         load = window.frames[30]
//     } else if (displayFrame == true) {
//         linkOpen.style.display = "flex"
//         buttonLoad.style.display = "flex"
//         closeButton.style.display = "none"
//         displayFrame = false
//         console.log("yep")
//         document.getElementById("frameWeb").innerHTML = ""
//     }
// }