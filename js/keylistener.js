// need to make sure I respect context
// also, I need to make these fully configurable
// because, if they aren't I'm guaranteed to conflict with user preferences.

function updateKeyChord(e) {
    document.getElementById("keychord").innerHTML = "keypressed: " + e.keyCode;
}

function search() {
    console.log("You are searching, right?");
}

// combine this and fn_and_prevent with better HoF
function focus_and_prevent(e, n) {
    focus_tile(n);
    e.preventDefault();
}

function fn_and_prevent(e, fn) {
    fn();
    e.preventDefault();
}

var keys = [];

var prefix = function () {
    return keys[16] && keys[17];
}

function keysPressed(e) {
    keys[e.keyCode] = true;
    updateKeyChord(e);

    if (prefix && keys[49]) {        // Ctrl Shift 1
        focus_and_prevent(e, 0);
    } else if (prefix && keys[50]) { // Ctrl Shift 2
        focus_and_prevent(e, 1);
    } else if (prefix && keys[51]) { // Ctrl Shift 3
        focus_and_prevent(e, 2);
    } else if (prefix && keys[52]) { // Ctrl Shift 4
        focus_and_prevent(e, 3);
    } else if (prefix && keys[53]) { // Ctrl Shift 5
        focus_and_prevent(e, 4);
    } else if (prefix && keys[54]) { // Ctrl Shift 6
        focus_and_prevent(e, 5);
    } else if (prefix && keys[55]) { // Ctrl Shift 7
        focus_and_prevent(e, 6);
    } else if (prefix && keys[56]) { // Ctrl Shift 8
        focus_and_prevent(e, 7);
    } else if (prefix && keys[57]) { // Ctrl Shift 9
        focus_and_prevent(e, 8);
    } else if (prefix && keys[78]) { // Ctrl Shift N
        fn_and_prevent(e, makeNewTile);
    } else if (prefix && keys[67]) { // Ctrl Shift C
        fn_and_prevent(e, cloneSelectedTile());
    } else if (prefix && keys[68]) { // Ctrl Shift D
        fn_and_prevent(e, deleteSelectedTile());
    } else if (keys[17] && keys[186]) {
        console.log("Focus dat minibuffer");
        e.preventDefault();
    } else if (keys[17] && keys[70]) {
        console.log("You pressed Ctrl + F and I overrode the default like a cunt.");
        search();
        e.preventDefault();
    }
}

function keysReleased(e) {
    keys[e.keyCode] = false;
    //console.log("just released: " + e.keyCode);
}

document.addEventListener("keydown", keysPressed, false);
document.addEventListener("keyup", keysReleased, false);
