// need to make sure I respect context
// also, I need to make these fully configurable
// because, if they aren't I'm guaranteed to conflict with user preferences.
function updateKeyChord(e) {
    document.getElementById("keychord").innerHTML = "keypressed: " + e.keyCode;
}

function search() {
    console.log("You are searching, right?");
}

var keys = [];

function keysPressed(e) {
    keys[e.keyCode] = true;
    updateKeyChord(e);

    if (keys[17] && keys[16] && keys[53]) {
        console.log("You pressed Ctrl + Shift + 5");
        e.preventDefault();
    } else if (keys[17] && keys[70]) {
        console.log("You pressed Ctrl + F and I overrode the default like a cunt.");
        e.preventDefault();
    } else if (keys[191]) {
        search();
        e.preventDefault();
    }
}

function keysReleased(e) {
    keys[e.keyCode] = false;
    console.log("just released: " + e.keyCode);
}

document.addEventListener("keydown", keysPressed, false);
document.addEventListener("keyup", keysReleased, false);
