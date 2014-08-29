// need to do some viewportWidth/viewportHeight calculations for autotiling
// also need to provide user-specified resizing

// beware: thar be a mess a mutable state in here

function displayViewportSize(e) {
    console.log('viewport width: ' + document.documentElement.clientWidth +
            'viewport height: ' + document.documentElement.clientHeight);
}

window.addEventListener('resize', displayViewportSize, false);

var __tileHolder = document.getElementById('tile-holder'),
    //tiles = ['tile 1', 'tile 2', 'tile 3', 'tile 4', 'tile 5',
             //'tile 6', 'tile 7', 'tile 8', 'tile 9'],
    focused = null,
    focusStyle = "3px solid green",
    unFocusStyle = "3px solid grey";

function unFocus() {
    if (focused !== null) {
        focused.style.border = unFocusStyle;
        focused = null;
    }
}

function setFocus(t) {
    unFocus()
    focused = t;
    focused.style.border = focusStyle;
}

function focusTile(n) {
    if (n < __tileHolder.children.length) {
        setFocus(__tileHolder.children[n]);
    }
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

function resizeAllTiles() {
    var len = __tileHolder.children.length;
    for (var i = 0; i < len; i++) {
        var currentTile = __tileHolder.children[i];
        if (currentTile.getAttribute('id') === 'tile') {
            currentTile.style.height = __tileHolder.offsetHeight - 10 + 'px';
            currentTile.style.width = ((1/len) * 100) - 0.5 + '%';
        }
    }
}

function makeNewTile() {
    if (__tileHolder.children.length < 30) {
        var newTile = document.createElement('div');
        newTile.setAttribute('id', 'tile');
        // hate how this is duplicated from setFocused. Need to fix.
        newTile.onmouseover = function() { unFocus(); focused = newTile;
                                           newTile.style.border = focusStyle; }
        //newTile.onmouseleave = unFocus(); //unnecessary because onmouseover takes care of it
        __tileHolder.appendChild(newTile);
        var content = document.createElement('label');
        content.textContent = __tileHolder.children.length;
        //var content = document.getElementById('search-area');
        //var content = document.getElementById('map-workspace');
        //content.style.display = 'span';
        newTile.appendChild(content);
        unFocus();
        setFocus(newTile);
        resizeAllTiles();
    } else {
        console.log("do you really need more than 30 tiles?");
    }
}

// supposed to be more general than makeNewTile, 
// in order to more intelligently resize based on split direction
function createNewTile(content) {
    if (__tileHolder.children.length < 30) {
        var newTile = document.createElement('div');
        //var content = document.createElement('label');
        newTile.setAttribute('id', 'tile');
        newTile.appendChild(content);
        newTile.onmouseover = function () { unFocus(); focused = newTile;
                                            newTile.style.border = focusStyle; }
        __tileHolder.appendChild(newTile);
        unFocus();
        setFocus(newTile);
        resizeAllTiles();
    } else {
        console.log("do you really need more than 30 tiles?");
    }
}

function splitSelectedTileVertical() {
    // resize spawn new tile and resize only it and the focused tile
    // switch focus to the new tile?
    console.log("split vertical");
}

function splitSelectedTileHorizontal() {
    console.log("split horizontal");
}

function cloneSelectedTile() {
    console.log('clone selected tile');
}

function deleteSelectedTile() {
    if (focused) {
        function getIndexOf(tile, holder) {
            for (var i = 0; i < holder.children.length; i++) {
                if (holder.children[i] === tile) {
                    return i;
                }
            }
            return -1;
        }
        function focusNextTile(i) {
            i > 0 ? __tileHolder.children.length > i ?
                    focusTile(i) : focusTile(__tileHolder.children.length-1) :
                    focusTile(0);
        }
        var i = getIndexOf(focused, __tileHolder);
        __tileHolder.removeChild(focused);
        unFocus();
        focusNextTile(i);
        resizeAllTiles();
    }
}

function deleteAllTiles() {
    while(__tileHolder.children.length > 0) {
        __tileHolder.removeChild(__tileHolder.children[0]);
    }
}

// TEMPLATES
function setMapperTemplate() {
    deleteAllTiles();
    createNewTile(document.getElementById('search-area'));
    createNewTile(document.getElementById('map-workspace'));
    focusTile(0);
}
