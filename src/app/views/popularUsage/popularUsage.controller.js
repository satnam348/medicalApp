(function () {
    'use strict';




    /* @ngInject */
    function popularUsageController($stateParams, apiUrl, $http,$scope) {
      var vm = this;
      $scope.toggle=false;
       var medicineId = $stateParams.medicineId;


      function popularMedicine(item) {



        var url = apiUrl.popularUsage.replace("{{medicine_id}}", item);

        $http.get(url, {
            cache: true
          })
          .then(function (response) {
            vm.usageData = response.data[0];
          })


        console.log('The selected item is: ' + item);
      }

      popularMedicine(medicineId)
    }


  angular
  .module('app')
  .controller('popularUsage', popularUsageController);
})();
