(function () {
  'use strict';

  /* @ngInject */
  function medicineInteractionsController($stateParams, apiUrl, $http,utilService) {
    var vm = this;
    var medicineId = $stateParams.medicineId;
 vm.options=utilService.actionSheet;
    function medicineInteractions(item) {



      var url = apiUrl.medicineInteractions.replace("{{medicine_id}}", item);

      $http.get(url, {
        cache: true
      })
        .then(function (response) {
          vm.medicineInteractionsList = response.data[0];
           console.log(vm.medicineInteractionsList);
          })


      console.log('The selected item is: ' + item);
    }

    medicineInteractions(medicineId)
  }
  angular
    .module('app')
    .controller('medicineInteractionsController', medicineInteractionsController);
})();
