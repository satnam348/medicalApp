

(function (angular) {
  'use strict';

 function diseaseCtrl($scope,apiUrl,commonServices,httpRequestService,utilService,$cordovaSocialSharing) {
        var vm = this;
        var $http=commonServices.$http;
        var $timeout=commonServices.$timeout
        vm.itemsPerPage = 10;
        vm.currentPage = 1;
        vm.showPagination=false;
        
      
     

function getdisease(currentPage,itemsPerPage)
{
 
    var query=['page='+currentPage,'size='+itemsPerPage].join("&");


    var url="http://www.healthos.co/api/v1/diseases?"+query;
    $http.get(url,{
    cache: true
})
    .then(function(response) {
       vm.allDiseaseList = response.data;
       vm.showPagination=true;
       console.log(vm.allDiseaseList);
    });
}
 


function prevPage() {
    if (vm.currentPage > 1) {
      vm.currentPage--;
      getdisease(vm.currentPage,vm.itemsPerPage);
      vm.prevPageDisabled();
    }
  }

 function prevPageDisabled() {
    vm.btnDisable = vm.currentPage === 1 ;
  }

function nextPage() {
    if (vm.currentPage > 0) {
      vm.currentPage++;
      getdisease(vm.currentPage,vm.itemsPerPage);
        vm.prevPageDisabled();
    }
  }

function init()
{
  getdisease(vm.currentPage,vm.itemsPerPage)
}


init();
vm.prevPage = prevPage;
vm.prevPageDisabled = prevPageDisabled;
vm.nextPage = nextPage;


    }

 
  angular.module('app')
    .controller('diseaseCtrl', diseaseCtrl);

})(angular);