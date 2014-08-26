// this is going to be tree-stuff

var newElement = document.createElement("p");
newElement.textContent = "this was magically created and appended to body";
document.getElementById("map-workspace").appendChild(newElement);

//appendChild, cloneNode

var clearCurrentMap = function () {
    document.getElementById("response-area").innerHTML = "";
}
