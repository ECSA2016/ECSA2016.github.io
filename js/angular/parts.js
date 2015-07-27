(function(){
    var app = angular.module('partDirectives', []);
    
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
    
    app.directive('galleryPart', function(){
        return {
            restrict :'E',
            templateUrl:'page_parts/gallery-part.html',
            controller : ['$http', function ($http){
                var gallery = this;
                gallery.current = 0;
                gallery.images = [];
                $http.get('data/gallery-elements.json').success(function(data){
                    gallery.images = data;
                });
                gallery.setCurrent = function(imageNumber){
                gallery.current = imageNumber || 0;
                };
            }],
            controllerAs :'galleryCtrl'
        };
    });
    
    app.directive('hostPart', function (){
        return {
            restrict:'E',
            templateUrl:'page_parts/host-part.html',
            controller : ['$http', function ($http){
                var host = this;
                host.elements = [];
                $http.get('data/host-elements.json').success(function(data){
                    host.elements = data;
                });
            }],
        controllerAs: 'hostCtrl'
        };
    });

    app.directive('sponsorPart', function (){
        return {
            restrict :'E',
            templateUrl :'page_parts/sponsor-part.html',
            controller : ['$http', function ($http){
                var sponsor = this;
                sponsor.elements = [];
                $http.get('data/sponsor-elements.json').success(function(data){
                    sponsor.elements = data;
                });
            }],
            controllerAs:'sponsorCtrl'
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

})();