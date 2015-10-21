//Captures which file you selected
var chooseFileButton = document.querySelector('#choose_file');
//Display the Type column in the CSV file
var textarea = document.querySelector('textarea');
var data = null;

function errorHandler(e) {
  console.error(e);
}
function readAsText(inFile, callback) {
  inFile.file(function(file) {
    var reader = new FileReader();

    reader.onerror = errorHandler;
    reader.onload = function(e) {
      callback(e.target.result);
    };

    reader.readAsText(file);
  });
}
function loadFileEntry(_chosenEntry) {
  chosenEntry = _chosenEntry;
  chosenEntry.file(function(file) {
    readAsText(chosenEntry, function(result) {
			//This uses the CSV library jquery-csv
			data = $.csv.toObjects(result);
			//Displays the First element in the Type column in the text area
			textarea.value = data[0].Type;
    });
  });
}

chooseFileButton.addEventListener('click', function(e) {
	//When the user clicks on the Choose File button 
	//It excecutes this code, only allowing the user 
	//to select csv files
  var accepts = [{
    mimeTypes: ['text/*'],
    extensions: ['csv']
  }];
  chrome.fileSystem.chooseEntry({type: 'openFile', accepts: accepts}, function(theFile) {
    if (!theFile) {
      return;
    }
    // use local storage to retain access to this file
    chrome.storage.local.set({'chosenFile': chrome.fileSystem.retainEntry(theFile)});
    loadFileEntry(theFile);
  });
});

