(function () {
  'use strict';




  /* @ngInject */
  function labSearchCtrl(apiUrl, $http, $ionicModal,$scope,utilService) {
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

      var url = apiUrl.autoCompleteLabTest.replace("{{lab_test_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {
          if (response.data.length == 0) {
            vm.error = true;


          } else {
            vm.allLabTestsLists = response.data;
          }

          vm.searchlist = true;
        })

      console.log('The selected item is: ' + item);
    }

    function searchLabTest(item) {



      var url = apiUrl.searchLabTests.replace("{{lab_test_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {

         //vm.openModal(response);
          vm.allLabTests = response.data;

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
    vm.searchLabTest = searchLabTest;
    vm.clearModal=clearModal;
  }
  angular
    .module('app')
    .controller('labSearchCtrl', labSearchCtrl);
})();
