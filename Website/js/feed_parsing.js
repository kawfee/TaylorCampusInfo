// Alex Sjoberg
// feed_parsing.js
// 4/23/14

//http://cse.taylor.edu/~ansmith/DCMenu

window.addEventListener("load" , init , false) 

//For some reason converting from the built in date objects to date strings isnt built in; we need to do it ourselves
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";


function init(){

	//String representation of JSON object; in the future will come from ???
	json = '{"menuDate": "4-24-14","breakfast":"Pancakes","soupOfTheDay":"Chicken Noodle","burgerOfTheWeek": "Special Burger","lunchbrunch" : "Hot Dogs","homewardBoundLunch" : "Chicken Nuggets","ziabellasLunch": "Spaghetti","southOfTheBorderLunch": "Taco","chefsCornerLunch":"Chicken Wraps","theBurgerBarLunch": "Burgers","theWellLunch":"Fish","homewardBoundDinner":"Steak","ziabellasDinner":"Lasagna","southOfTheBorderDinner":"Burrito","chefsCornerDinner":"Chicken","theBurgerBarDinner":"More Burgers","theWellDinner":"Fruit Salad"}'

	var menu_obj = eval("(" + json + ')');
	
	load_date(menu_obj)
	load_menu_items(menu_obj)

	
}

// Gets date info from menu object and places in 'date_container' as li
// Also converts to weekday and does the same
function load_date(menu_obj){
	var menuDate = menu_obj.menuDate
	
	//convert to weekday
	var date = new Date(menuDate)
	var day_of_week = weekday[date.getDay()];

	var date_container = document.getElementById("date_container");
	
	// add date
	var date_item = document.createElement('li');
	date_item.innerHTML = menuDate;
	date_item.id = "date"
	date_container.appendChild(date_item)
	
	// add weekday
	var day_item = document.createElement('li');
	day_item.innerHTML = day_of_week
	day_item.id = "weekday"
	date_container.appendChild(day_item)
}

//Go through items in json object and place in DOM object with corresponding ID
function load_menu_items(menu_obj){
	for (var key in menu_obj) {
		// Dont care about built in properties or the date
		if (menu_obj.hasOwnProperty(key) && key != "menuDate" ){
			var DOM_object = document.getElementById(key);
			
			//We don't have a place for this item
			if (DOM_object == null){
				console.log("Key " + key + " does not have an html element with corresponding ID");
				continue
			}
			
			var new_item = document.createElement('li');
			new_item.innerHTML = menu_obj[key]
			new_item.className = "item"

			DOM_object.appendChild(new_item);
	  }
	}
}
/*
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
*/