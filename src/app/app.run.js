(function () {
  'use strict';





  function runBlock($ionicPlatform, authorizationToken, $rootScope, $state, $ionicPopup, $cordovaNetwork) {




    if (!sessionStorage.access_token) {
      authorizationToken.accessToken().then(function (resolve) {

      }).catch(function (response) {
        console.log(response.status);
      });
    }

    $rootScope.$on('$stateChangeStart', function () {
      $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess', function () {
      $rootScope.stateIsLoading = false;
    });


    $ionicPlatform.ready(function () {

      if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {
          $ionicPopup.alert1({
              title: 'No Internet Connection',
              content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
            })
            .then(function (result) {
              if (!result) {
                ionic.Platform.exitApp();
              }
            });
        }
      }
      // Hide the accessory bar by default (remove this to show the accessory bar
      // above the keyboard for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  }
  angular
    .module('app')
    .run(runBlock);

})();
