(function (angular) {
  
  'use strict';

  
  /*ngInject*/
  function commonServicesConstructor(// angular services
                                     $log, $state, $stateParams, $urlRouter, $rootScope, $q, $filter, $timeout,
                                     $window, $location, $http, $document
                                    
                                     
                                     ) {

  


    return {

      // Angular Built In Services
      $rootScope: $rootScope,
      $log: $log,
      $state: $state,
      $stateParams: $stateParams,
      $urlRouter: $urlRouter,
      $filter: $filter,
      $http: $http,
      $q: $q,
     
      $window: $window,
      $location: $location,
      $timeout: $timeout,
      $document: $document,

    }
    
  }

  angular.module('app')
      .factory('commonServices', commonServicesConstructor);

})(angular);
