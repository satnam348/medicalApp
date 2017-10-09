(function () {
  'use strict';




  /* @ngInject */
  function alternateMedicinesController($stateParams, apiUrl, commonServices, httpRequestService, utilService) {
    var vm = this;
    var medicineId = $stateParams.medicineId;

    var vm = this;
    var $http = commonServices.$http;
    var $timeout = commonServices.$timeout
    vm.itemsPerPage = 20;
    vm.currentPage = 1;
    vm.searchlist = false;
    vm.showPagination = true;
     vm.options=utilService.actionSheet;



    function prevPage() {
      if (vm.currentPage > 1) {
        vm.currentPage--;
        alternativeMedicines(vm.currentPage, vm.itemsPerPage, medicineId)
        vm.prevPageDisabled();
      }
    }

    function prevPageDisabled() {
      vm.btnDisable = vm.currentPage === 1;
    }

    function nextPage() {
      if (vm.currentPage > 0) {
        vm.currentPage++;
        alternativeMedicines(vm.currentPage, vm.itemsPerPage, medicineId)
        vm.prevPageDisabled();
      }
    }



    function alternativeMedicines(currentpage, itemsperpage, itemId) {
      var query = ['page=' + currentpage, 'size=' + itemsperpage].join("&");
      var url = " http://www.healthos.co/api/v1/medicines/brands/" + itemId + "/alternatives?" + query;
      //var url= apiUrl.alternativeMedicines.replace("{{medicine_query}}",itemId);


      $http.get(url, {
          cache: true
        })
        .then(function (response) {
          vm.allMedicines = response.data;

          console.log(vm.allMedicines);
        });
    }

    function init() {
      alternativeMedicines(vm.currentPage, vm.itemsPerPage, medicineId)
    }
    init();
    vm.prevPage = prevPage;
    vm.prevPageDisabled = prevPageDisabled;
    vm.nextPage = nextPage;
  
  }
  angular
    .module('app')
    .controller('alternateMedicines', alternateMedicinesController);
})();
