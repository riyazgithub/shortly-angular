angular.module('shortly.links', [])
.controller('LinksController', function ($scope, $location, Auth, links) {
  // Your code here
  if (!Auth.isAuth()) {
    $location.path('/signin');
  }
  $scope.data = {};
  $scope.data.links = links;

  $scope.signout = function () {
    Auth.signout();
  };
})
.directive('shortenedLink', function() {
  return {
    template:  `<img src='../../assets/redirect_icon.png'/>
      <div class='info'>
        <div class='visits'><span class='count' >{{link.visits}}</span>Visits</div>
        <div class='title'>{{link.title}}</div>
        <div class='original'>{{link.url}}</div>
        <a href='{{link.baseUrl}}/{{link.code}}'>{{link.baseUrl}}/{{link.code}}</a>
      </div>`
  };
});

