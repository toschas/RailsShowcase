angular.module('railsShowcaseApp')
  .controller('LoginController', function ($scope, $location) {
    $scope.login = function ($event) {
      $event.preventDefault();
      $location.path('/home');
    };
  });
