(function() {
    'use strict';



 
    /* @ngInject */
    function Feature3Controller(commonServices, $ionicSlideBoxDelegate) {
        var vm = this;
        var $window=commonServices.$window;
         vm.options = {
    direction: 'vertical',
    slidesPerView: '2',
    paginationClickable: true,
    showNavButtons: false
  };
    vm.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  vm.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };
  

    function doRefresh()
     {
      $window.location.reload();
     }
      vm.doRefresh =doRefresh 
    }
        angular
        .module('app')
        .controller('Feature3Controller', Feature3Controller);
})();