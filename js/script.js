function upDate(previewPic) {
    let image = document.getElementById("image");
    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.innerHTML = previewPic.alt;
    console.log("Image updated to: " + previewPic.alt);
}

function unDo() {
    let image = document.getElementById("image");
    image.style.backgroundImage = "none";
    image.innerHTML = "Hover over an image below to display here.";
    console.log("Image reset to default.");
}

function enableKeyboardFocus() {
    const previews = document.querySelectorAll(".preview");
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute("tabindex", "0");
        console.log("Tabindex enabled for image " + (i + 1));
    }
}

window.onload = function () {
    enableKeyboardFocus();
    console.log("Page loaded. Tab focus is active.");
};
