

(function (angular) {
  'use strict';

 function Feature1Controller($scope,apiUrl,commonServices,httpRequestService,utilService,$cordovaSocialSharing) {
        var vm = this;
        var $http=commonServices.$http;
        var $timeout=commonServices.$timeout
        vm.itemsPerPage = 25;
        vm.currentPage = 1;
        vm.showPagination=true;
        $scope.toggle=false;
        vm.options=utilService.actionSheet;
     

function getMedicines(currentPage,itemsPerPage)
{
 
    var query=['page='+currentPage,'size='+itemsPerPage].join("&");


    var url="http://www.healthos.co/api/v1/medicines/brands?"+query;
    $http.get(url,{
    cache: true
})
    .then(function(response) {
       vm.allMedicines = response.data;
      
       console.log(vm.allMedicines);
    });
}
 


function prevPage() {
    if (vm.currentPage > 1) {
      vm.currentPage--;
      getMedicines(vm.currentPage,vm.itemsPerPage);
      vm.prevPageDisabled();
    }
  }

 function prevPageDisabled() {
    vm.btnDisable = vm.currentPage === 1 ;
  }

function nextPage() {
    if (vm.currentPage > 0) {
      vm.currentPage++;
      getMedicines(vm.currentPage,vm.itemsPerPage);
        vm.prevPageDisabled();
    }
  }

function init()
{
  getMedicines(vm.currentPage,vm.itemsPerPage)
}


init();
vm.prevPage = prevPage;
vm.prevPageDisabled = prevPageDisabled;
vm.nextPage = nextPage;


    }

 
  angular.module('app')
    .controller('Feature1Controller', Feature1Controller);

})(angular);