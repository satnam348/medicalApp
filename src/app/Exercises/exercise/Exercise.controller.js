

(function (angular) {
  'use strict';

 function ExerciseCtrl($scope,apiUrl,commonServices,httpRequestService,utilService,$cordovaSocialSharing) {
        var vm = this;
        var $http=commonServices.$http;
        var $timeout=commonServices.$timeout
        vm.itemsPerPage = 10;
        vm.currentPage = 1;
        vm.showPagination=true;
        $scope.toggle=false;
        vm.options=utilService.actionSheet;
     

function getExercises(currentPage,itemsPerPage)
{
 
    var query=['page='+currentPage,'size='+itemsPerPage].join("&");


    var url="http://www.healthos.co/api/v1/exercises?"+query;
    $http.get(url,{
    cache: true
})
    .then(function(response) {
       vm.allTests = response.data;
      
       console.log(vm.allTests);
    });
}
 


function prevPage() {
    if (vm.currentPage > 1) {
      vm.currentPage--;
      getExercises(vm.currentPage,vm.itemsPerPage);
      vm.prevPageDisabled();
    }
  }

 function prevPageDisabled() {
    vm.btnDisable = vm.currentPage === 1 ;
  }

function nextPage() {
    if (vm.currentPage > 0) {
      vm.currentPage++;
      getExercises(vm.currentPage,vm.itemsPerPage);
        vm.prevPageDisabled();
    }
  }

function init()
{
  getExercises(vm.currentPage,vm.itemsPerPage)
}


init();
vm.prevPage = prevPage;
vm.prevPageDisabled = prevPageDisabled;
vm.nextPage = nextPage;


    }

 
  angular.module('app')
    .controller('ExerciseCtrl', ExerciseCtrl);

})(angular);