'use strict';

angular.module('railsShowcaseApp')
  .factory('httpActivityIndicatorInterceptor', function ($log, $q, $rootScope, usSpinnerService) {
    var numLoadings = 0;

    return {
      request: function (config) {
        numLoadings++;
        usSpinnerService.spin('spinner-0');
        return config || $q.when(config);
      },
      response: function (response) {
        if ((--numLoadings) === 0) {
          usSpinnerService.stop('spinner-0');
          $rootScope.$broadcast("loader_hide");
        }
        return response || $q.when(response);
      },
      responseError: function (response) {
        if (!(--numLoadings)) {
          usSpinnerService.stop('spinner-0');
        }
        return $q.reject(response);
      }
    };
  });
