// Code for cross domain ajax retrieval of rss feeds taken from 
// http://blogs.agilefaqs.com/2013/07/17/fetching-cross-domain-xml-in-javascript-simple-solution/
// This solution is ugly but out of the half dozen or so I've tried its the only one that works

// Original code modified by Alex Sjoberg to support variable urls and callbacks
simpleAJAXLib = {
	init: function (url,callback) {
		this.callback = callback
		this.fetchJSON(url);
	},

	fetchJSON: function (url) {
		var root = 'https://query.yahooapis.com/v1/public/yql?q=';
		var yql = 'select * from xml where url="' + url + '"';
		var proxy_url = root + encodeURIComponent(yql) + '&format=json&diagnostics=false&callback=simpleAJAXLib.callback';
		document.getElementsByTagName('body')[0].appendChild(this.jsTag(proxy_url));
	},

	jsTag: function (url) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', url);
		return script;
	},

}