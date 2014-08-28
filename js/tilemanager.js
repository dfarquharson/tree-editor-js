// need to do some viewportWidth/viewportHeight calculations for autotiling
// also need to provide user-specified resizing

function displayViewportSize(e) {
    console.log('viewport width: ' + document.documentElement.clientWidth +
            'viewport height: ' + document.documentElement.clientHeight);
}

window.addEventListener('resize', displayViewportSize, false);

var tiles = ['tile 1', 'tile 2', 'tile 3', 'tile 4', 'tile 5',
             'tile 6', 'tile 7', 'tile 8', 'tile 9']

var focusTile = function (n) {
    console.log('focusing on ' + tiles[n]);
}

function increase_tile_size_left() {
    console.log("increase tile size left.");
}

function increase_tile_size_down() {
    console.log("increase tile size down.");
}

function increase_tile_size_up() {
    console.log("increase tile size up.");
}

function increase_tile_size_right() {
    console.log("increase tile size right.");
}

var resizeAllTiles = function () {
    //do the maths and do the resize based on # of children
    var len = __tileHolder.children.length;
    for (var i = 0; i < len; i++) {
        var currentTile = __tileHolder.children[i];
        console.log(currentTile);
        if (currentTile.getAttribute('id') === 'tile') {
            currentTile.style.height = __tileHolder.offsetHeight - 10 + 'px';
            currentTile.style.width = ((1/len) * 100) - 0.4 + '%';
        }
    }
}

var __tileHolder = document.getElementById('tile-holder');

function makeNewTile() {
    if (__tileHolder.children.length < 30) {
        var newTile = document.createElement('div');
        var content = document.createElement('label');
        newTile.setAttribute('id', 'tile');
        __tileHolder.appendChild(newTile);
        newTile.appendChild(content);
        content.textContent = __tileHolder.children.length;
        resizeAllTiles();
    } else {
        console.log("do you really need more than 30 tiles?")
    }
}

function cloneSelectedTile() {
    console.log('clone selected tile');
}

function deleteSelectedTile() {
    if (__tileHolder.lastChild !== null) {
        __tileHolder.removeChild(__tileHolder.lastChild);
        resizeAllTiles();
    }
}
