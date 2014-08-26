var loadXMLDoc = function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            document.getElementById("response-area").innerHTML = xmlhttp.responseText;
            console.log("typeof response: " + (typeof xmlhttp.response));
            console.log("responseType: " + xmlhttp.responseType);
            var mymap = JSON.parse(xmlhttp.response);
            console.log("input fqjn: " + mymap.input.children[0].atts.fullyQualifiedJavaName);
            console.log("output fqjn: " + mymap.output.children[0].atts.fullyQualifiedJavaName);
        }
    }
    var xdapi_root = "http://localhost:5000/xd/map/";
    console.log(xdapi_root + document.getElementById("user-specified-map").value);
    xmlhttp.open("GET",
            xdapi_root + document.getElementById("user-specified-map").value,
            true);
    xmlhttp.send();
}
