// Alex Sjoberg
// feed_parsing.js
// 4/23/14

//http://cse.taylor.edu/~ansmith/DCMenu

window.addEventListener("load" , init , false) 

function init(){

	json = '{"menuDate": "1-1-14","breakfast":"Pancakes","soupOfTheDay":"Chicken Noodle","burgerOfTheWeek": "Special Burger","lunchbrunch" : "Hot Dogs","homewardBoundLunch" : "Chicken Nuggets","ziabellasLunch": "Spaghetti","southOfTheBorderLunch": "Taco","chefsCornerLunch":"Chicken Wraps","theBurgerBarLunch": "Burgers","theWellLunch":"Fish","homewardBoundDinner":"Steak","ziabelasDinner":"Lasagna","southOfTheBorderDinner":"Burrito","chefsCornerDinner":"Chicken","theBurgerBarDinner":"More Burgers","theWellDinner":"Fruit Salad"}'

	var obj = eval("(" + json + ')');

	console.log(obj)


}