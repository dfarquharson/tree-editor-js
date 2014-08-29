// repo/branch/file search
// maybe I'll throw in xtl search related functions?

function filterRepos() {
    // side effects contained to div id='search-area'
    var query = document.getElementById('search-field').value.toLowerCase().split(' ');
    console.log('query: ' + query);
    var matches = [];
    for (var i = 0; i < REPO_LIST.length; i++) {
        var allmatched = true;
        // maybe should add short-circuit in exact match (optimization)
        for (var j = 0; j < query.length; j++) {
            if (REPO_LIST[i].toLowerCase().indexOf(query[j]) === -1) {
                allmatched = false;
                break;
            }
        }
        if (allmatched) {
            matches.push(REPO_LIST[i]);
        }
        if (matches.length >= 10) {
            break;
        }
    }
    console.log(matches.toString());
    //document.getElementById('repo-list').textContent = matches.toString();
    var repolist = document.getElementById('repo-list');
    while (repolist.children.length > 0) {
        repolist.removeChild(repolist.children[0]);
    }
    for (var i = 0; i < matches.length; i++) {
        var match = document.createElement('li');
        match.textContent = matches[i];
        repolist.appendChild(match);
    }
    return matches;
}
