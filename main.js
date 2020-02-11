var exampleBoxes = {};
function getExample(exampleName) {

  var exampleContainer = document.getElementById(exampleName);
  var exampleBox = document.getElementById("example-" + exampleName);
  if (exampleBox) {
    if (exampleBox.style.display == "grid") {
      exampleBox.style.display = "none";
      return;
    }
    exampleBox.style.display = "grid";
    return;
  }

  var exampleBox = document.createElement("div")
  exampleBox.className = 'example';
  exampleBox.id = 'example-' + exampleName;
  exampleContainer.appendChild(exampleBox);

  var commentColumn = document.createElement("pre")
  commentColumn.className = 'comment-column';
  commentColumn.id = 'comment-column-' + exampleName;
  exampleBox.appendChild(commentColumn);

  var codeColumn = document.createElement("pre")
  codeColumn.className = 'code-column prettyprint lang-sql';
  codeColumn.id = 'code-column-' + exampleName;
  exampleBox.appendChild(codeColumn);

  exampleBoxes[exampleName] = [commentColumn, codeColumn];
  var xhttp = new XMLHttpRequest();
  xhttp.onloadend = function() {
    var code = xhttp.responseText;
    populateCodeAndComment(exampleName, code);
    exampleBox.style.display = "grid";
  };
  xhttp.open("GET", "examples/" + exampleName, true);
  xhttp.send();

}

function populateCodeAndComment(example, code) {
  const lines = code.split('\n');
  const commentElement = exampleBoxes[example][0];
  const codeElement = exampleBoxes[example][1];
  for (var line of lines) {
    var isComment = line.substr(0, 2) == '--'
    if (isComment) {
      commentElement.textContent += line.substr(2) + '\n';
      codeElement.textContent += '\n';
      continue
    }
    commentElement.textContent += '\n';
    codeElement.textContent += line + '\n';
  }
  PR.prettyPrint();
}

