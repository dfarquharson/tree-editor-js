// need to make sure I respect context
// also, I need to make these fully configurable
// because, if they aren't I'm guaranteed to conflict with user preferences.

function updateKeyChord(e) {
    document.getElementById("keychord").innerHTML = "keypressed: " + e.keyCode;
}

function search() {
    console.log("You are searching, right?");
}

function focus_and_prevent(e, n) {
    focus_tile(n);
    e.preventDefault();
}

var keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;
    updateKeyChord(e);

    if (keys[16] && keys[17] && keys[49]) {
        focus_and_prevent(e, 0);
    } else if (keys[16] && keys[17] && keys[50]) {
        focus_and_prevent(e, 1);
    } else if (keys[16] && keys[17] && keys[51]) {
        focus_and_prevent(e, 2);
    } else if (keys[16] && keys[17] && keys[52]) {
        focus_and_prevent(e, 3);
    } else if (keys[16] && keys[17] && keys[53]) {
        focus_and_prevent(e, 4);
    } else if (keys[16] && keys[17] && keys[54]) {
        focus_and_prevent(e, 5);
    } else if (keys[16] && keys[17] && keys[55]) {
        focus_and_prevent(e, 6);
    } else if (keys[16] && keys[17] && keys[56]) {
        focus_and_prevent(e, 7);
    } else if (keys[16] && keys[17] && keys[57]) {
        focus_and_prevent(e, 8);
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
