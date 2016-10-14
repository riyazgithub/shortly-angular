angular.module('shortly.links', [])
.controller('LinksController', function ($scope, Links) {
  // Your code here
  Links.getLinks()
  .then(function(links) {
    $scope.links = links;
  });
});
