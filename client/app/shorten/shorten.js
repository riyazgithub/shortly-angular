angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }
  $scope.regex = '/^((https?|ftp):\/\/)?([a-z]+\.)?[a-z0-9-]+(\.[a-z]{1,4}){1,‌​2}(/.*\?.*)?$/i';
  $scope.link = {};
  $scope.links = [];
  $scope.showSpin = false;
  $scope.addLink = function() {
    $scope.showSpin = true;

    Links.addOne($scope.link)
    .then(function(resp) {
      $scope.showSpin = false;
      $scope.links.push(resp.data);
    }); 
  };

  $scope.signout = function () {
    Auth.signout();
  };

});
