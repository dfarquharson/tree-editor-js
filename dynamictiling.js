// need to do some viewportWidth/viewportHeight calculations for autotiling
// also need to provide user-specified resizing

function displayViewportSize(e) {
    console.log("viewport width: " + document.documentElement.clientWidth +
            "viewport height: " + document.documentElement.clientHeight);
}

window.addEventListener("resize", displayViewportSize, false);
