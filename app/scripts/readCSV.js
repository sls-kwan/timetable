$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "scripts/data.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
	var data = $.csv.toObjects(allText);
	console.log(data[0].test);
}
