function mouseMoving(e) {
    //document.getElementById("mouse-pos").innerHTML = "x: " + e.screenX + ", y: " + e.screenY;
    document.getElementById("mouse-pos").innerHTML = "x: " + e.clientX + ", y: " + e.clientY;
}

document.addEventListener("mousemove", mouseMoving, false);
