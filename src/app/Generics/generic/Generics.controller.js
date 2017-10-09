

(function (angular) {
  'use strict';

 function GenericsCtrl($scope,apiUrl,commonServices,httpRequestService,utilService,$cordovaSocialSharing) {
        var vm = this;
        var $http=commonServices.$http;
        var $timeout=commonServices.$timeout
        vm.itemsPerPage = 10;
        vm.currentPage = 1;
        vm.showPagination=true;
        $scope.toggle=false;
        vm.options=utilService.actionSheet;
     

function getGenerics(currentPage,itemsPerPage)
{
 
    var query=['page='+currentPage,'size='+itemsPerPage].join("&");


    var url="http://www.healthos.co/api/v1/medicines/generics?"+query;
    $http.get(url,{
    cache: true
})
    .then(function(response) {
       vm.allgenerics = response.data;
      
       console.log(vm.allgenerics);
    });
}
 


function prevPage() {
    if (vm.currentPage > 1) {
      vm.currentPage--;
      getGenerics(vm.currentPage,vm.itemsPerPage);
      vm.prevPageDisabled();
    }
  }

 function prevPageDisabled() {
    vm.btnDisable = vm.currentPage === 1 ;
  }

function nextPage() {
    if (vm.currentPage > 0) {
      vm.currentPage++;
      getGenerics(vm.currentPage,vm.itemsPerPage);
        vm.prevPageDisabled();
    }
  }

function init()
{
  getGenerics(vm.currentPage,vm.itemsPerPage)
}


init();
vm.prevPage = prevPage;
vm.prevPageDisabled = prevPageDisabled;
vm.nextPage = nextPage;


    }

 
  angular.module('app')
    .controller('GenericsCtrl', GenericsCtrl);

})(angular);