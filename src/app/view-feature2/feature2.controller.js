(function() {
    'use strict';




    /* @ngInject */
    function Feature2Controller(apiUrl) {
        var vm = this;
        vm.menuList = apiUrl.navmenu;

         vm.data = {
            showDelete: false
        };

         vm.edit = function (item) {
            alert('Edit Item: ' + item.id);
        };
         vm.share = function (item) {
            alert('Share Item: ' + item.id);
        };

         vm.moveItem = function (item, fromIndex, toIndex) {
             vm.menuList.submenu.splice(fromIndex, 1);
            vm.menuList.submenu.splice(toIndex, 0, item);
        };

         vm.onItemDelete = function (item) {
             vm.menuList.submenu.splice(vm.menuList.indexOf(item), 1);
        };
  
      
    }
        angular
        .module('app')
        .controller('Feature2Controller', Feature2Controller);
})();