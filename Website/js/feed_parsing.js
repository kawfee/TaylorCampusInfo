// Alex Sjoberg
// feed_parsing.js
// 4/23/14

//http://cse.taylor.edu/~ansmith/DCMenu

window.addEventListener("load" , init , false) 

function init(){
	console.log("looking for data from stream");

	//send request to andrew's page
	var xhr = new XMLHttpRequest();
	xhr.open ("GET" , "http://cse.taylor.edu/~ansmith/DCMenu");

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200){
			console.log("got response");
			console.log(xhr.responseText)
		}
	}

	xhr.send();
	console.log("sent request")
}

