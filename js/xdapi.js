var xdapi_root = 'http://localhost:5000/xd/',
    xtlbld = 'http://localhost:8000/xd/map_jar',
    REPO_LIST = [];

var loadRepos = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            REPO_LIST = JSON.parse(xhr.response).repos;
            document.getElementById('repo-count').textContent =
                'Total Repo Count: ' + REPO_LIST.length;
            filterRepos();
            //document.getElementById('repo-list').textContent = 
                //REPO_LIST.slice(0, 10).toString();
            // too limiting. Need some way to browse.
        }
    }
    var url = xdapi_root + 'list';
    xhr.open('GET', url, true);
    xhr.send();
}

var loadMap = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            appendChildren(document.getElementById('map-area'), renderMap(JSON.parse(xhr.response)));
            document.getElementById('save-map-button').removeAttribute('disabled');
            document.getElementById('compile-map-button').removeAttribute('disabled');
        }
    }
    var url = xdapi_root + 'map/' + document.getElementById('user-specified-map').value;
    console.log('loaded map: ' + url);
    xhr.open('GET', url, true);
    xhr.send();
}

var saveMap = function () {
    // need to ensure that content is there and is parseable as JSON
    var map_json = JSON.parse(document.getElementById('map-area').textContent);
    var map_name = getMapName(map_json);
    //var xhr = new XMLHttpRequest();
    //xhr.onreadystatechange = function () {
        //if (xhr.readyState === 4 && xhr.status === 200) {
            //console.log('saved map: ' + map_name);
        //}
    //}
    //xhr.open('POST',
            //xdapi_root + 'map/' + document.getElementById('user-specified-map').value,
            //true);
    //xhr.setRequestHeader('Access-Control-Request-Origin', '*');
    //xhr.setRequestHeader('Access-Control-Request-Header', 'POST');
    //xhr.send();
    console.log('saved map: ' + map_name);
}

var compileMap = function () {
    var map_json = JSON.parse(document.getElementById('map-area').textContent);
    var map_name = getMapName(map_json);
    console.log('compiling map: ' + map_name);
    var compilation_result = document.getElementById('compilation-result');
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            // this fucks everything up (which sorta makes sense)
            // need this to be a download presented to the user
            //createNewTile(createCompilationResult(xhr.response));
        }
    }
    xhr.open('POST', xtlbld, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(map_json));
}
