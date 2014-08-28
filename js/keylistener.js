// need to make sure I respect context
// also, I need to make these fully configurable
// because, if they aren't I'm guaranteed to conflict with user preferences.

function updateKeyChord(e) {
    document.getElementById('keychord').innerHTML = 'keypressed: ' + e.keyCode;
}

function search() {
    console.log('You are searching, right?');
}

function log(x) {
    console.log(x);
}

function fn_and_prevent(e, f, args) {
    e.preventDefault();
    return f.apply(null, args);
}

var keys = [];

var prefix = function () {
    return keys[16] && keys[17];
}

function keysPressed(e) {
    keys[e.keyCode] = true;
    updateKeyChord(e);

    if (prefix() && keys[49]) {        // Ctrl Shift 1
        fn_and_prevent(e, focusTile, [0]);
    } else if (prefix() && keys[50]) { // Ctrl Shift 2
        fn_and_prevent(e, focusTile, [1]);
    } else if (prefix() && keys[51]) { // Ctrl Shift 3
        fn_and_prevent(e, focusTile, [2]);
    } else if (prefix() && keys[52]) { // Ctrl Shift 4
        fn_and_prevent(e, focusTile, [3]);
    } else if (prefix() && keys[53]) { // Ctrl Shift 5
        fn_and_prevent(e, focusTile, [4]);
    } else if (prefix() && keys[54]) { // Ctrl Shift 6
        fn_and_prevent(e, focusTile, [5]);
    } else if (prefix() && keys[55]) { // Ctrl Shift 7
        fn_and_prevent(e, focusTile, [6]);
    } else if (prefix() && keys[56]) { // Ctrl Shift 8
        fn_and_prevent(e, focusTile, [7]);
    } else if (prefix() && keys[57]) { // Ctrl Shift 9
        fn_and_prevent(e, focusTile, [8]);
    } else if (prefix() && keys[84]) { // Ctrl Shift T
        fn_and_prevent(e, makeNewTile);
    } else if (prefix() && keys[67]) { // Ctrl Shift C
        fn_and_prevent(e, cloneSelectedTile);
    } else if (prefix() && keys[68]) { // Ctrl Shift D
        fn_and_prevent(e, deleteSelectedTile);
    } else if (prefix() && (keys[72] || keys[37])) { // Ctrl Shift H/Left
        fn_and_prevent(e, increase_tile_size_left);
    } else if (prefix() && (keys[74] || keys[40])) { // Ctrl Shift J/Down
        fn_and_prevent(e, increase_tile_size_down);
    } else if (prefix() && (keys[75] || keys[38])) { // Ctrl Shift K/Up
        fn_and_prevent(e, increase_tile_size_up);
    } else if (prefix() && (keys[76] || keys[39])) { // Ctrl Shift L/Right
        fn_and_prevent(e, increase_tile_size_right);
    } else if (keys[17] && keys[186]) { // Ctrl ;
        fn_and_prevent(e, log, ['Focus dat minibuffer']);
    } else if (keys[17] && keys[70]) {  // Ctrl F
        fn_and_prevent(e, search);
    }
}

function keysReleased(e) {
    keys[e.keyCode] = false;
    //console.log('just released: ' + e.keyCode);
}

document.addEventListener('keydown', keysPressed, false);
document.addEventListener('keyup', keysReleased, false);
