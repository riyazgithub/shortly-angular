angular.module('shortly.links', [])
.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }
  $scope.data = {};
  Links.getAll()
  .then(function(links) {
    $scope.data.links = links;
  });

  $scope.signout = function () {
    Auth.signout();
  };
});
