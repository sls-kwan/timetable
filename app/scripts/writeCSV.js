var data = [["Type", "Day", "Start", "End"], ["name2", "city2", "more info"]];
var testAppend = ["test", "Test", "01100", "0010000"]
data.push(testAppend);
var csvContent = "data:text/csv;charset=utf-8,";

data.forEach(function(inputArray, index){

   dataString = inputArray.join(",");
   csvContent += index < data.length ? dataString+ "\n" : dataString;

}); 

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);

link.setAttribute("download", "my_data.csv");

link.click();
