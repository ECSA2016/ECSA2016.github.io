(function() {
	var app = angular.module('conference', ['tabDirectives', 'partDirectives', 'ngRoute']);
    
    app.controller('tabController', ['$scope', '$http', function ($scope, $http){
        
        $scope.tabNumber = 0;
        $scope.navElements = [];
        $scope.sideElements = [];
        
        $http.get('data/nav-elements.json').success(function(data){
            $scope.navElements = data;
        });
        
        $http.get('data/side-elements.json').success(function(data){
            $scope.sideElements = data;
        });

        $scope.selectTab = function(setTab) {
                $scope.tabNumber = setTab;
        };

        $scope.isSelected = function(checkTab) {
                return $scope.tabNumber === checkTab;
        };
    }]);
})();