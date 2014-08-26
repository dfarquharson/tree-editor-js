var xdapi_root = "http://localhost:5000/xd/";

var loadMap = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("response-area").innerHTML = xhr.response;
            var mymap = JSON.parse(xhr.response);
            console.log("input fqjn: " + mymap.input.children[0].atts.fullyQualifiedJavaName);
            console.log("output fqjn: " + mymap.output.children[0].atts.fullyQualifiedJavaName);
        }
    }
    console.log(xdapi_root + document.getElementById("user-specified-map").value);
    xhr.open("GET",
            xdapi_root + "map/" + document.getElementById("user-specified-map").value,
            true);
    xhr.send();
}

var loadRepos = function () {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var repo_list = JSON.parse(xhr.response);
            document.getElementById("repo-count").textContent =
                "Repo Count: " + repo_list.repos.length;
        }
    }
    xhr.open("GET", xdapi_root + "list", true);
    xhr.send();
}
