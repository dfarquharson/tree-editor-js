// this is going to be tree-stuff

var newElement = document.createElement('p');
newElement.textContent = 'this was magically created and appended to body';
document.getElementById('map-workspace').appendChild(newElement);

//appendChild, cloneNode

var getMapName = function (map) {
    return map.output.children[0].atts.fullyQualifiedJavaName;
}

var clearMap = function () {
    console.log('cleared map: ' +
            getMapName(JSON.parse(document.getElementById('response-area').textContent)));
    document.getElementById('response-area').innerHTML = '';
    document.getElementById('save-map-button').setAttribute('disabled', true);
    document.getElementById('compile-map-button').setAttribute('disabled', true);
}
