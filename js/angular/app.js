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
	app.directive('summaryOfProposal', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/summary-of-proposal.html"
		};
	});
	app.directive('countryAndCity', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/country-and-city.html"
		};
	});
	app.directive('socialEvents', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/social-events.html"
		};
	});
	app.directive('knowladgeOfTheLocation', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/knowladge-of-the-location.html"
		};
	});
	app.directive('timing', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/timing.html"
		};
	});
	app.directive('financialEstimates', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/financial-estimates.html"
		};
	});
	app.directive('organizers', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/organizers.html"
		};
	});
	app.directive('sponsorPartnerOther', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/sponsor-partner-other.html"
		};
	});
	app.directive('conferenceLogistics', function() {
		return {
			restrict : 'E',
			templateUrl : "tabs/conference-logistics.html"
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

    app.directive('ikuGalleryPart', function(){
        return {
            restrict :'E',
            templateUrl:'page_parts/iku-gallery-part.html',
            controller : function (){
                this.current = 0;
                this.images = ikuGallery;

                this.setCurrent = function(imageNumber){
                this.current = imageNumber || 0;
                }
            },
            controllerAs :'ikuGalleryCtrl'
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
            this.showPanel = "hidePanel";
            this.shiftBody = "fixBody";

            this.selectTab = function(setTab) {
                    this.tabNumber = setTab;
            };

            this.isSelected = function(checkTab) {
                    return this.tabNumber === checkTab;
            };
            
            this.setPanel = function(){
                if(this.showPanel === "hidePanel"){
                    this.showPanel = "showPanel";
                    this.shiftBody = "shiftBody";
                } else{
                    this.showPanel = "hidePanel";
                    this.shiftBody = "fixBody";
                }
            };
        });
        
	var navElements = [ {
		tabNumber : 0
	}, {
		tabNumber : 1
	}, {
		tabNumber : 2
	}, {
		tabNumber : 9
	}, {
		tabNumber : 10
	} ];

	var sideElements = [ {
		tabNumber : 3
	}, {
		tabNumber : 4
	}, {
		tabNumber : 5
	}, {
		tabNumber : 6
	}, {
		tabNumber : 7
	}, {
		tabNumber : 8
	}, {
		tabNumber : 11
	}, {
		tabNumber : 12
	}, {
		tabNumber : 13
	}, {
        tabNumber : 14
     }, {
        tabNumber : 15
     }, {
        tabNumber : 16
     }, {
        tabNumber : 17
     }, {
        tabNumber : 18
     }, {
        tabNumber : 19
     }, {
        tabNumber : 20
     }, {
        tabNumber : 21
     }, {
        tabNumber : 22
     } ];
    
        var contentElements = [{
		name : 'Home',
                number : 0,
                link : 'home.html'
        }, {
		name : 'Conference Program',
                number : 1,
                link : 'conference-program.html'
        }, {
		name : 'Call for Papers',
                number : 2,
                link : 'call-for-papers.html'
        }, {
		name : 'Workshops',
                number : 3,
                link : 'workshops.html'
        }, {
		name : 'Call for Tool Demos',
                number : 4,
                link : 'call-for-tool-demos.html'
        }, {
		name : 'Keynotes',
                number : 5,
                link : 'keynotes.html'
        }, {
		name : 'Organization',
                number : 6,
                link : 'organization.html'
        }, {
		name : 'Program Committee',
                number : 7,
                link : 'program-committee.html'
        }, {
		name : 'Important Dates',
                number : 8,
                link : 'important-dates.html'
        }, {
		name : 'Registration',
                number : 9,
                link : 'registration.html'
        }, {
		name : 'Venue',
                number : 10,
                link : 'venue.html'
        }, {
		name : 'Accommodation',
                number : 11,
                link : 'accommodation.html'
        }, {
		name : 'Travel',
                number : 12,
                link : 'travel.html'
        }, {
		name : 'Previous Years',
                number : 13,
                link : 'previous-years.html'
        }, {
        name : "Summary of Proposal",
                number : 14,
                link : 'summary-of-proposal.html'
        }, {
        name : "Country and City",
                number : 15,
                link : 'country-and-city.html'
        }, {
        name : "Social Events",
                number : 16,
                link : 'social-events.html'
        }, {
        name : "Knowladge of the Location",
                number : 17,
                link : 'knowladge-of-the-location.html'
        }, {
        name : "Timing",
                number : 18,
                link : 'timing.html'
        }, {
        name : "Financial Estimates",
                number : 19,
                link : 'financial-estimates.html'
        }, {
        name : "Organizers",
                number : 20,
                link : 'organizers.html'
        }, {
        name : "Sponsors, Partners, Other Events",
                number : 21,
                link : 'sponsor-partner-other.html'
        }, {
        name : "Conference Logistics and Publicity",
                number : 22,
                link : 'conference-logistics.html'
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
    }];
    
    var ikuGallery = [{
        small : "images/iku/iku-1(small).png",
        normal : "images/iku/iku-1.png",
        number : 0
    } ,{
        small : "images/iku/iku-2(small).png",
        normal : "images/iku/iku-2.png",
        number : 1
    } ,{
        small : "images/iku/iku-3(small).png",
        normal : "images/iku/iku-3.png",
        number : 2
    } ,{
        small : "images/iku/iku-4(small).png",
        normal : "images/iku/iku-4.png",
        number : 3
    } ,{
        small : "images/iku/iku-5(small).png",
        normal : "images/iku/iku-5.png",
        number : 4
    }];
})();