(function () {
  'use strict';




  /* @ngInject */
  function searchCtrl(apiUrl, $http, $ionicModal,$scope,utilService) {
    var vm = this;
    vm.searchlist = false;
     vm.options=utilService.actionSheet;

    //  $ionicModal.fromTemplateUrl('app/coreComponents/search/modal.html', {
    //          scope: $scope,
    //         animation: 'slide-in-up'
    //       }).then(function (modal) {
    //          vm.modal = modal;
    //       });
    function clearModal() {
      vm.searchparam = "";
    }
    function search(item) {

      if (item == "") {

        return;
      }

      var url = apiUrl.autocompleteMedicines.replace("{{medicine_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {
          if (response.data.length == 0) {
            vm.error = true;


          } else {
            vm.medicinesList = response.data;
          }

          vm.searchlist = true;
        })

      console.log('The selected item is: ' + item);
    }

    function searchMedicine(item) {



      var url = apiUrl.searchMedicines.replace("{{medicine_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {

         //vm.openModal(response);
          vm.allMedicines = response.data;

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
    vm.searchMedicine = searchMedicine;
    vm.clearModal=clearModal;
  }
  angular
    .module('app')
    .controller('searchCtrl', searchCtrl);
})();
