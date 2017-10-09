(function (angular) {
  'use strict';

  function authorizationServiceConstructor($http) {
      var vm = this;

 

    

    vm.generateToken = generateToken;

    // A service returns 'this' with any exposed API attached to 'this'
  }

  // TODO:  Because this object does not manage any local state it should be a factory and not a service.
  angular.module('app')
    .service('authorization', authorizationServiceConstructor);

})(angular);
