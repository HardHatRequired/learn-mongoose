angular
    .module('avengers')
    .controller('MainCtrl', function($scope, dataService) {

        $scope.avengers = function() {
          dataService.getAvengers().then(function(response) {
            $scope.avengers = response;
          });
        };

        $scope.getAvengers();


    });
