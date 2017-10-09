(function (angular) {
  'use strict';

  function authorizationServiceConstructor($http,$q,apiUrl) {
      var vm = this;




function accessToken(){

    var deferred = $q.defer();
     
    var headers = {
        'content-type': 'application/json'
      };
      var req = {};
      req.method = 'POST';
      req.url = apiUrl.authTokenUrl;
      req.headers = headers;
      req.data = apiUrl.authCredentials;
     
    $http(req)
        //if request is successful
        .then(function(result,status,headers,config){

           vm.model.accessToken = result.data.access_token;
        sessionStorage.setItem('access_token',vm.model.accessToken);
            deferred.resolve('request successful');

        }).catch(function(response){
          deferred.reject(response);
        })

    //return the promise
    return deferred.promise;
     

}

    function generateToken() {
var deferred = $q.defer();
      var data = {
        "grant_type": "client_credentials",
        "client_id": "ba040b226a07a25eda30d1c38c20ffa2f90a8e9ab5f60dedd7372c58799f5657",
        "client_secret": "8b3eb395f5dd71896316ac24a5638dee6a72a7e13a11a2f7952c1f9e55b941a8",
        "scope": "public read write"
      }


      //var body = queryString.stringify(data);

      var headers = {
        'content-type': 'application/json'
      };
      var req = {};
      req.method = 'POST';
      req.url = apiUrl.authTokenUrl;
      req.headers = headers;
      req.data = data;
      if(!sessionStorage.access_token)
      {
      return $http(req).then(function (result) {

        vm.model.accessToken = result.data.access_token;
        sessionStorage.setItem('access_token',vm.model.accessToken);
      });
      }
    }

    vm.model = {
      accessToken: ""

    };

    vm.generateToken = generateToken;
     vm.accessToken = accessToken;

    // A service returns 'this' with any exposed API attached to 'this'
  }

  // TODO:  Because this object does not manage any local state it should be a factory and not a service.
  angular.module('app')
    .service('authorizationToken', authorizationServiceConstructor);

})(angular);

