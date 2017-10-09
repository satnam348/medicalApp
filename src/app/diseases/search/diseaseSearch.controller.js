(function () {
  'use strict';




  /* @ngInject */
  function diseaseSearchCtrl(apiUrl, $http, $ionicModal,$scope,utilService) {
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

      var url = apiUrl.autocompleteDiseases.replace("{{disease_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {
          if (response.data.length == 0) {
            vm.error = true;


          } else {
            vm.allDiseaseLists = response.data;
          }

          vm.searchlist = true;
        })

      console.log('The selected item is: ' + item);
    }

    function searchDiseases(item) {



      var url = apiUrl.searchDiseases.replace("{{disease_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {

         //vm.openModal(response);
          vm.searchDiseases = response.data;
          console.log(vm.searchDiseases);

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
    vm.searchDiseases = searchDiseases;
    vm.clearModal=clearModal;
  }
  angular
    .module('app')
    .controller('diseaseSearchCtrl', diseaseSearchCtrl);
})();
