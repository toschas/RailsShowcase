angular.module('railsShowcaseApp')
  .controller('HomeController', function ($scope, $location) {
    $scope.logout = function ($event) {
      $event.preventDefault();
      $location.path('/login');
    };
  });
