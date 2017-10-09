(function () {
  'use strict';
  /* @ngInject */
  function layoutController($scope, $ionicHistory,$ionicSideMenuDelegate) {
    var vm = this;
    $scope.$on('$ionicView.beforeEnter', function () {
        $ionicSideMenuDelegate.canDragContent(false);
    });
    $scope.$on('$ionicView.leave', function () {
        $ionicSideMenuDelegate.canDragContent(true);
    });
    
    $scope.myGoBack = function () {
      $ionicHistory.goBack();
    };
    $ionicHistory.nextViewOptions({
      historyRoot: true,
      disableAnimate: true,
      expire: 300
    });
    $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
    };

    $scope.group = 'deals';

  }
  angular
    .module('app')
    .controller('layout', layoutController);
})();
