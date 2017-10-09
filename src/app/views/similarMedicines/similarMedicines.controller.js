(function () {
  'use strict';

  /* @ngInject */
  function similarMedicinesController($stateParams, apiUrl, $http,utilService) {
    var vm = this;
    var medicineId = $stateParams.medicineId;
 vm.options=utilService.actionSheet;
    function searchMedicine(item) {



      var url = apiUrl.similarMedicines.replace("{{medicine_id}}", item);

      $http.get(url, {
        cache: true
      })
        .then(function (response) {
          vm.allMedicines = response.data;
          vm.searchlist = false;
        })


      console.log('The selected item is: ' + item);
    }

    searchMedicine(medicineId)
  }
  angular
    .module('app')
    .controller('similarMedicines', similarMedicinesController);
})();
