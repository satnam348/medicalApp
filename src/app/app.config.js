(function () {
  'use strict';
  function configure($ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false);
    $ionicConfigProvider.backButton.icon('ion-android-arrow-back');
    $ionicConfigProvider.backButton.text('')
  }

  angular
    .module('app')
    .config(configure);
})();
