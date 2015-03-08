/* global $ */
/**
 * Main entry point.
 *
 * the DOM has been localized and the user sees it in their language.
 *
 * @class Main
 */
(function() {
  	'use strict';

  	var DEFAULT_ROUTE="home";
    var template=document.querySelector('#maintemplate');
    template.pages=[
    	{name: "Home", hash: "home"},
    	{name: "Time Table", hash: "timetable"}
    ];

    template.addEventListener('template-bound', function(e) {
  	// Use URL hash for initial route. Otherwise, use the first page.
  	this.route = this.route || DEFAULT_ROUTE;

  	template.menuItemSelected = function(e, detail, sender) {
	  if (detail.isSelected) {
	    document.querySelector('#mainapp').closeDrawer();
	  }
	};

});
}());
