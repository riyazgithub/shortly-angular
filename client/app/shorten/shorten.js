angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.links = [];
  $scope.showSpin = false;
  $scope.postLinks = function() {
    $scope.showSpin = true;
    Links.postLinks($scope.url)
    .then(function(newLink) {
      $scope.showSpin = false;
      $scope.links.push(newLink);
    }); 
  };

  
});
