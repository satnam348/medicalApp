

(function (angular) {
  'use strict';

  function httpInterceptor($injector) {
    var requestCount = 0;
    return {
      request: function (config) {
        var service = $injector.get('utilService');
        service.showLoader("Loading...");
        if (config.url.includes("http://www.healthos.co/api/v1") && config.url != "http://www.healthos.co/api/v1/oauth/token.json") {
          config.headers['Authorization'] = 'Bearer ' + sessionStorage.access_token;
          config.headers['Accept'] = 'application/json';
        }
        requestCount++;
        return config;

      },

      requestError: function (config) {
        if (!requestCount)
          return;

        requestCount--;
        // If it was last ongoing request, broadcast event
        if (!requestCount) {
          var service = $injector.get('utilService');
          service.hideLoader();
        }
        return config;
      },

      response: function (res) {
        if (!requestCount)
          return;

        requestCount--;
        // If it was last ongoing request, broadcast event
        if (!requestCount) {
          var service = $injector.get('utilService');
          service.hideLoader();
        }


        return res;
      },

      responseError: function (res) {
        if (!requestCount)
          return;

        requestCount--;
        // If it was last ongoing request, broadcast event
        if (!requestCount) {
          var service = $injector.get('utilService');
          service.hideLoader();
        }
        return res;
      }
    }
  }

  function httpConfig($httpProvider) {

    $httpProvider.interceptors.push('httpInterceptor');
  }

  angular.module('app')
    .factory('httpInterceptor', httpInterceptor)
    .config(httpConfig);

})(angular);
