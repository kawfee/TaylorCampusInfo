// Alex Sjoberg
// chapel_feed.js

window.addEventListener("load" , init , false);

function init(){

	url = 'http://25livepub.collegenet.com/calendars/chapel.rss'

	simpleAJAXLib.init(url,callback)
}

callback = function(results){

	console.log(results);
	console.log(results.query.results.rss.channel.item[1])
	var title = results.query.results.rss.channel.item[1].title
	var date = results.query.results.rss.channel.item[1].category
	
	// Add date
	var date_item = document.createElement("span")
	date_item.innerHTML = date + ":"
	document.getElementById("date").appendChild(date_item)
	
	// Add 'title'
	var title_item = document.createElement("span")
	title_item.innerHTML = title
	document.getElementById("chapel_title").appendChild(title_item)
}
