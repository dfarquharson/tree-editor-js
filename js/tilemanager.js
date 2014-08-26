// need to do some viewportWidth/viewportHeight calculations for autotiling
// also need to provide user-specified resizing

function displayViewportSize(e) {
    console.log("viewport width: " + document.documentElement.clientWidth +
            "viewport height: " + document.documentElement.clientHeight);
}

window.addEventListener("resize", displayViewportSize, false);

var tiles = ["tile 1", "tile 2", "tile 3", "tile 4", "tile 5",
             "tile 6", "tile 7", "tile 8", "tile 9"]

var focus_tile = function (n) {
    console.log("focusing on " + tiles[n]);
}
