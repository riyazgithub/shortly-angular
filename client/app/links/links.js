angular.module('shortly.links', [])
.controller('LinksController', function ($scope, $location, Auth, links) {
  // Your code here
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }
  $scope.data = {};
  console.log('da links', links);
  $scope.data.links = links;

  $scope.signout = function () {
    console.log('signing out');
    Auth.signout();
  };
});
