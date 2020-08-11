var images = document.getElementsByClassName("thumbnail"); // array of thumbnails
var n = images.length; // number of images
var fullSizeBox = document.getElementById("fullsize-box"); //full size image div
var thumbNails = document.getElementById("thumbnails"); //entire group of thumbnails

// show image full size
function openFullSize(event) {
    var imageNum = event.target.alt;
    // <img src="1.jpg" alt="1" width="30">
    var fullSizeImage = '<img src="' + imageNum + '.jpg" alt="' + imageNum + '" width="30">';
    if (imageNum==1 || imageNum==10) {
        fullSizeImage = fullSizeImage.replace("jpg", "gif");
    }
    document.getElementById("fullsize-image").innerHTML = fullSizeImage;
        // get caption from thumbnail #image-1.caption
        // var captionSelector = "#image-" + imageNum + " .caption";
        // var caption = thumbNails.querySelectorAll(captionSelector)[0].innerHTML;
        // document.getElementById("caption").innerHTML = caption;
    fullSizeBox.style.display = "inline-block";
    // thumbNails.style.display = "none";
}

// return to thumbnails
function closeFullSize() {
    fullSizeBox.style.display = "none";
    // thumbNails.style.display = "inline-block";
}

function slideLeft() {
    // get current image number
    var currImage = document.getElementById("fullsize-image");
    currImage = currImage.getElementsByTagName("img")[0].alt;
        // get caption from previous thumbnail
        // captionSelector = "#image-" + (Number(currImage)-1) + " .caption";
        // var caption = thumbNails.querySelectorAll(captionSelector)[0].innerHTML;
        // document.getElementById("caption").innerHTML = caption;
    // change image if more images available
    if (currImage>1) {
        var fullSizeImage = '<img src="' + (Number(currImage)-1) + '.jpg" alt="' + (Number(currImage)-1) + '" width="30">';
        if (currImage-1==1 || currImage-1==10) { // 1.gif and 10.gif
            fullSizeImage = fullSizeImage.replace("jpg", "gif");
        }
        document.getElementById("fullsize-image").innerHTML = fullSizeImage;
    }
}

function slideRight() {
    var currImage = document.getElementById("fullsize-image");
    currImage = currImage.getElementsByTagName("img")[0].alt;
        // get caption from previous thumbnail
        // captionSelector = "#image-" + (Number(currImage)+1) + " .caption";
        // var caption = thumbNails.querySelectorAll(captionSelector)[0].innerHTML;
        // document.getElementById("caption").innerHTML = caption;
    //change image if more images available
    if (currImage<12) {
        var fullSizeImage = '<img src="' + (Number(currImage)+1) + '.jpg" alt="' + (Number(currImage)+1) + '" width="30">';
        if (currImage==9) { // 10.gif not 10.jpg
            fullSizeImage = fullSizeImage.replace("jpg", "gif");
        }
        document.getElementById("fullsize-image").innerHTML = fullSizeImage;
    }
}

var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", closeFullSize);
for (i=0; i<n; i++) {
    images[i].addEventListener("click", openFullSize);
}
var leftArrow = document.getElementById("left-arrow");
leftArrow.addEventListener("click", slideLeft);
var rightArrow = document.getElementById("right-arrow");
rightArrow.addEventListener("click", slideRight);
var hoverElements = document.getElementsByClassName("hover");

// make full image buttons only appear on hover
fullSizeBox.addEventListener("mouseover", showButtons);
fullSizeBox.addEventListener("mouseout", hideButtons);

function showButtons() {
    for (i=0; i<hoverElements.length; i++) {
        hoverElements[i].style.display = "block";
    }
}

function hideButtons() {
    for (i=0; i<hoverElements.length; i++) {
        hoverElements[i].style.display = "none";
    }
}