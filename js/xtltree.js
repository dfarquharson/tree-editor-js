// this is going to be tree-stuff

var getMapName = function (map) {
    return getXtlName(map, 'output');
}

var getXtlName = function (map, xtl) {
    return map[xtl].children[0].atts.fullyQualifiedJavaName;
}

var clearMap = function () {
    console.log('cleared map: ' +
            getMapName(JSON.parse(document.getElementById('map-area').textContent)));
    document.getElementById('map-area').textContent = '';
    document.getElementById('save-map-button').setAttribute('disabled', true);
    document.getElementById('compile-map-button').setAttribute('disabled', true);
}
