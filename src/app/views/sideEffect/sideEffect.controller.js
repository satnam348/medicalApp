(function () {
  'use strict';

  /* @ngInject */
  function sideEffectController($stateParams, apiUrl, $http,$scope) {
    var vm = this;
    $scope.toggle=false;
    var medicineId = $stateParams.medicineId;

    function searchMedicine(item) {



      var url = apiUrl.commonSideEffects.replace("{{medicine_id}}", item);

      $http.get(url, {
        cache: true
      })
        .then(function (response) {
           vm.sideEffectData = response.data[0];
          vm.searchlist = false;
        })


      console.log('The selected item is: ' + item);
    }

    searchMedicine(medicineId)
  }
  angular
    .module('app')
    .controller('sideEffectController', sideEffectController);
})();
