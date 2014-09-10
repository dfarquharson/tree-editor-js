// this is going to be tree-stuff

var getMapName = function (map) {
    return getXtlName(map, 'output');
}

var getXtlName = function (map, xtl) {
    return map[xtl].children[0].atts.fullyQualifiedJavaName;
}

var buildXTL = function (rawblob, elem) {
    console.log('build xtl stuff happening recursively');
    var newelem = document.createElement('div');
    if ('atts' in rawblob) {
        var attselem = document.createElement('p'),
            atts = rawblob['atts'],
            keys = Object.keys(atts),
            vals = [];
        for (var i = 0; i < keys.length; i++) {
            vals.push([keys[i], atts[keys[i]]]);
        }
        attselem.innerHTML = vals.toString();
        newelem.appendChild(attselem);
    }
    if ('children' in rawblob) {
        var kids = rawblob['children'];
        for (var i = 0; i < kids.length; i++) {
            buildXTL(kids[i], newelem);
        }
    }
    elem.appendChild(newelem);
}

var renderXTL = function (rawmap, side) {
    var xtl = document.createElement('div');
    xtl.setAttribute('id', side);
    //xtl.innerHTML = side + ' fqjn: ' + getXtlName(rawmap, side);
    // recur build xtl dom
    buildXTL(rawmap[side], xtl);
    return xtl
}

var renderMap = function (rawmap) {
    return [renderXTL(rawmap, 'input'), renderXTL(rawmap, 'output')];
}

var clearMap = function () {
    console.log('clearing map...');
    var maparea = document.getElementById('map-area');
    removeChildren(maparea);
    document.getElementById('save-map-button').setAttribute('disabled', true);
    document.getElementById('compile-map-button').setAttribute('disabled', true);
}
