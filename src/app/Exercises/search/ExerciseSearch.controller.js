(function () {
  'use strict';




  /* @ngInject */
  function ExerciseSearchCtrl(apiUrl, $http, $ionicModal,$scope,utilService) {
    var vm = this;
    vm.searchlist = false;
     vm.options=utilService.actionSheet;

    function clearModal() {
      vm.searchparam = "";
    }
    function search(item) {

      if (item == "") {

        return;
      }

      var url = apiUrl.autoCompleteExcercise.replace("{{exercise_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {
          if (response.data.length == 0) {
            vm.error = true;


          } else {
            vm.allExcercisesLists = response.data;
          }

          vm.searchlist = true;
        })

      console.log('The selected item is: ' + item);
    }

    function searchExcercise(item) {



      var url = apiUrl.searchExcercises.replace("{{exercise_query}}", item);

      $http.get(url, {
          cache: true
        })
        .then(function (response) {

         //vm.openModal(response);
          vm.allExcercises = response.data;

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
    vm.searchExcercise = searchExcercise;
    vm.clearModal=clearModal;
  }
  angular
    .module('app')
    .controller('ExerciseSearchCtrl', ExerciseSearchCtrl);
})();
