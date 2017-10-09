(function (angular) {
  'use strict';

  function httpRequestServiceConstructor(commonServices) {
       var service = this;
         var $http=commonServices.$http;
function getRequest(url)
{
    return $http.get(url);
}
   
 service.getRequest=getRequest;

return service;
}

 
  angular.module('app')
    .service('httpRequestService', httpRequestServiceConstructor);

})(angular);
