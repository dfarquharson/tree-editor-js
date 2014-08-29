// Compilation result tile

var clearCompilationArea = function () {
    document.getElementById('compilation-result').textContent = '';
}

var createCompilationResult = function (response) {
    var workspace = document.createElement('div');
    var timestamp = document.createElement('label');
    var result = document.createElement('p');
    workspace.setAttribute('id', 'compilation-result-workspace');
    timestamp.textContent = 'Completion Time: ' + Date();
    result.setAttribute('id', 'compilation-result');
    result.textContent = response;
    appendChildren(workspace, [timestamp, result]);
    return workspace;
}
