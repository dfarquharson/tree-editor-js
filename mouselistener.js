function mouseMoving(e) {
    document.getElementById("mouse-pos").innerHTML =
        "cur-pos -- x: " + e.clientX + ", y: " + e.clientY;
}

function mouseClickPos(e) {
    document.getElementById("mouse-click-pos").innerHTML =
        "click-pos -- x: " + e.clientX + ", y: " + e.clientY;
}

document.addEventListener("mousemove", mouseMoving, false);
document.addEventListener("click", mouseClickPos, false);
