(function(){
    var app = angular.module('tabDirectives', []);
   
	app.directive('home', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/home.html"
		};
	});
	app.directive('conferenceProgram', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/conference-program.html"
		};
	});
	app.directive('callForPapers', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/call-for-papers.html"
		};
	});
	app.directive('workshops', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/workshops.html"
		};
	});
	app.directive('callForToolDemos', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/call-for-tool-demos.html"
		};
	});
	app.directive('keynotes', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/keynotes.html"
		};
	});
	app.directive('organization', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/organization.html"
		};
	});
	app.directive('programCommittee', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/program-committee.html"
		};
	});
	app.directive('importantDates', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/important-dates.html"
		};
	});
	app.directive('registration', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/registration.html"
		};
	});
	app.directive('venue', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/venue.html"
		};
	});
	app.directive('accommodation', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/accommodation.html"
		};
	});
	app.directive('travel', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/travel.html"
		};
	});
	app.directive('previousYears', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/previous-years.html"
		};
	});
})();