var xdapi_root = "http://localhost:5000/xd/";

var loadRepos = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var repo_list = JSON.parse(xhr.response);
            document.getElementById("repo-count").textContent =
                "Repo Count: " + repo_list.repos.length;
        }
    }
    var url = xdapi_root + "list";
    xhr.open("GET", url, true);
    xhr.send();
}

var loadMap = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("response-area").innerHTML = xhr.response;
            document.getElementById("save-map-button").removeAttribute("disabled");
            var mymap = JSON.parse(xhr.response);
            console.log("input fqjn: " + mymap.input.children[0].atts.fullyQualifiedJavaName);
            console.log("output fqjn: " + getMapName(mymap));
        }
    }
    var url = xdapi_root + "map/" + document.getElementById("user-specified-map").value;
    console.log(url);
    xhr.open("GET", url, true);
    xhr.send();
}

var saveMap = function () {
    var map_json = JSON.parse(document.getElementById("response-area").textContent);
    var map_name = getMapName(map_json);
    //var xhr = new XMLHttpRequest();
    //xhr.onreadystatechange = function () {
        //if (xhr.readyState === 4 && xhr.status === 200) {
            //console.log("saved map: " + map_name);
        //}
    //}
    //xhr.open("POST",
            //xdapi_root + "map/" + document.getElementById("user-specified-map").value,
            //true);
    //xhr.setRequestHeader("Access-Control-Request-Origin", "*");
    //xhr.setRequestHeader("Access-Control-Request-Header", "POST");
    //xhr.send();
    console.log("saved map: " + map_name);
}