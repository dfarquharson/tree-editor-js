function appendChildren(elem, children) {
    for (var i = 0; i < children.length; i++) {
        elem.appendChild(children[i]);
    }
}

function focusElem(elem) {
    document.getElementById(elem).focus();
}

window.onload(focusElem('search-field'));
