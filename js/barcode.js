var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
}

function startScan() {

	cordova.plugins.barcodeScanner.scan(
		function (result) {
			// var s = "Result: " + result.text + "<br/>" +
			// "Format: " + result.format + "<br/>" +
			// "Cancelled: " + result.cancelled;
			// resultDiv.innerHTML = s;
			  jQuery.getJSON("http://isbndb.com/api/v2/json/9CDSTNTF/book/"+result.text, function(api_result) {
                var book = api_result["data"][0];
                $("#title").val(book["title_long"]);
                $("#author").val(book["author_data"][0]["name"]);
                $("#isbn").val(book["isbn13"]);
                $("#description").val(book["summary"])
            });

		}, 
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}