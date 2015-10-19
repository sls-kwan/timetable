var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
var csvContent = "data:text/csv;charset=utf-8,";

data.forEach(function(infoArray, index){

   dataString = infoArray.join(",");
   csvContent += index < data.length ? dataString+ "\n" : dataString;

}); 

var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");

link.click()
