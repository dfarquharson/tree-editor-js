function appendChildren(elem, children) {
    for (var i = 0; i < children.length; i++) {
        elem.appendChild(children[i]);
    }
}

function focusElem(elem) {
    document.getElementById(elem).focus();
}

function log(x) {
    console.log(x);
}

window.onload = function loadFunctions() {
    log('onload events firing');
    loadRepos();
    setMapperTemplate();
    focusElem('search-field');
}
