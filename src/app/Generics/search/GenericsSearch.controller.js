(function () {
  'use strict';




  /* @ngInject */
  function GenericsSearchCtrl(apiUrl, $http, $ionicModal,$scope,utilService) {
    var vm = this;
    vm.searchlist = false;
     vm.options=utilService.actionSheet;

    function clearModal() {
      vm.searchparam = "";
    }
    function search(item) {

      if (item == "") {

        return;
      }

      var url = apiUrl.autoCompleteGenerics.replace("{{generic_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {
          if (response.data.length == 0) {
            vm.error = true;


          } else {
            vm.allGenericsLists = response.data;
          }

          vm.searchlist = true;
        })

      console.log('The selected item is: ' + item);
    }

    function searchGenerics(item) {



      var url = apiUrl.searchGenerics.replace("{{generic_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {

         //vm.openModal(response);
          vm.allGenerics = response.data;

          vm.searchlist = false;
        })


      console.log('The selected item is: ' + item);
    }

     vm.openModal = function () {
      vm.modal.show();
    };
    vm.closeModal = function () {
      vm.modal.hide();
    };
    vm.search = search;
    vm.searchGenerics = searchGenerics;
    vm.clearModal=clearModal;
  }
  angular
    .module('app')
    .controller('GenericsSearchCtrl', GenericsSearchCtrl);
})();
