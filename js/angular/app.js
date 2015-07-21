(function() {
	var app = angular.module('conference', []);

        app.directive('logoPart', function (){
            return {
                restrict:'E',
                templateUrl:'page_parts/logo-part.html'
            };
        });

	app.directive('sideBar', function() {
		return {
			restrict : 'E',
			templateUrl : 'page_parts/side-bar.html'
		};
	});

    
	app.directive('navBar', function() {
		return {
			restrict : 'E',
			templateUrl : "page_parts/nav-bar.html"
		};
	});

	app.directive('contentPart', function() {
		return {
			restrict : 'E',
			templateUrl : "page_parts/content-part.html"
		};
	});
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
        
        app.directive('hostPart', function (){
            return {
                restrict:'E',
                templateUrl:'page_parts/host-part.html',
                controller : function (){
                    this.elements = hostElements;
                },
                controllerAs: 'hostCtrl'
            };
        });
        
        app.directive('sponsorPart', function (){
           return {
               restrict :'E',
               templateUrl :'page_parts/sponsor-part.html',
               controller : function (){
                   this.elements = sponsorElements;
               },
               controllerAs:'sponsorCtrl'
           };
        });
    
    
        app.directive('galleryPart', function(){
            return {
                restrict :'E',
                templateUrl:'page_parts/gallery-part.html',
                controller : function (){
                    this.current = 0;
                    this.images = gallery;
                    
                    this.setCurrent = function(imageNumber){
                    this.current = imageNumber || 0;
                    }
                },
                controllerAs :'galleryCtrl'
            };
        });
           
//        app.directive('twitterPart', function (){
//           return {
//               restrict:'E',
//               templateUrl:'page_parts/twitter-part.html',
//               controller: function (){
//               this.a= "asd";
//               this.load = function(d, s, id) {
//                        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/
//                                        .test(d.location) ? 'http'
//                                        : 'https';
//                        if (!d.getElementById(id)) {
//                                js = d.createElement(s);
//                                js.id = id;
//                                js.src = p
//                                                + "://platform.twitter.com/widgets.js";
//                                fjs.parentNode
//                                                .insertBefore(js, fjs);
//                        }
//                };
//               },
//               controllerAs : 'twitCtrl',
//           } 
//        });
        
        app.controller('tabController', function (){
            this.tabNumber = 0;
            this.navElements = navElements;
            this.sideElements = sideElements;
            this.contentElements = contentElements;

            this.selectTab = function(setTab) {
                    this.tabNumber = setTab;
            };

            this.isSelected = function(checkTab) {
                    return this.tabNumber === checkTab;
            };
        });
        
	var navElements = [ {
		name : 'Home',
		tabNumber : 0
	}, {
		name : 'Conference Program',
		tabNumber : 1
	}, {
		name : 'Call for Papers',
		tabNumber : 2
	}, {
		name : 'Registration',
		tabNumber : 9
	}, {
		name : 'Venue',
		tabNumber : 10
	} ];

	var sideElements = [ {
		name : 'Workshops',
		tabNumber : 3
	}, {
		name : 'Call for Tool Demos',
		tabNumber : 4
	}, {
		name : 'Keynotes',
		tabNumber : 5
	}, {
		name : 'Organization',
		tabNumber : 6
	}, {
		name : 'Program Committee',
		tabNumber : 7
	}, {
		name : 'Important Dates',
		tabNumber : 8
	}, {
		name : 'Accommodation',
		tabNumber : 11
	}, {
		name : 'Travel',
		tabNumber : 12
	}, {
		name : 'Previous Years',
		tabNumber : 13
	} ];
    
        var contentElements = [{
                name : "home",
                number : 0,
                link : 'home.html'
        }, {
                name : "conference-program",
                number : 1,
                link : 'conference-program.html'
        }, {
                name : "call-for-papers",
                number : 2,
                link : 'call-for-papers.html'
        }, {
                name : "workshops",
                number : 3,
                link : 'workshops.html'
        }, {
                name : "call-for-tool-demos",
                number : 4,
                link : 'call-for-tool-demos.html'
        }, {
                name : "keynotes",
                number : 5,
                link : 'keynotes.html'
        }, {
                name : "organization",
                number : 6,
                link : 'organization.html'
        }, {
                name : "program-committee",
                number : 7,
                link : 'program-committee.html'
        }, {
                name : "important-dates",
                number : 8,
                link : 'important-dates.html'
        }, {
                name : "registration",
                number : 9,
                link : 'registration.html'
        }, {
                name : "venue",
                number : 10,
                link : 'venue.html'
        }, {
                name : "accommodation",
                number : 11,
                link : 'accommodation.html'
        }, {
                name : "travel",
                number : 12,
                link : 'travel.html'
        }, {
                name : "previous-years",
                number : 13,
                link : 'previous-years.html'
        }];
    
    var hostElements = [ {
            name : 'IKU',
            link : 'http://www.iku.edu.tr/',
            image : 'images/iku_logo.png'
    } ];

    var sponsorElements = [{
            name : 'ACM',
            link : 'http://www.acm.org/',
            image : 'http://ecsa-conference.org/2015/images/ACM_ICPS_logo_small.png'
    }, {
            name : 'Springer',
            link : 'http://www.springer.com/computer/lncs?SGWID=0-164-0-0-0',
            image :'http://ecsa-conference.org/2015/images/springer_lncs_logo_small.png'
    } ];
    
    var gallery = [{
        small : "images/istanbul/ist-1(small).jpg",
        normal : "images/istanbul/ist-1.jpg",
        number : 0
    } ,{
        small : "images/istanbul/ist-2(small).jpg",
        normal : "images/istanbul/ist-2.jpg",
        number : 1
    } ,{
        small : "images/istanbul/ist-3(small).jpg",
        normal : "images/istanbul/ist-3.jpg",
        number : 2
    } ,{
        small : "images/istanbul/ist-4(small).jpg",
        normal : "images/istanbul/ist-4.jpg",
        number : 3
    } ,{
        small : "images/istanbul/ist-5(small).jpg",
        normal : "images/istanbul/ist-5.jpg",
        number : 4
    }]
})();