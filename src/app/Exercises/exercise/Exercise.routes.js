(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.Exercises', {
                url: '/Exercises',
                views: {
                    'menuContent': {
                        templateUrl: 'app/Exercises/exercise/Exercise.html',
                        controller: 'ExerciseCtrl as vm'
                    }
                }
            });
    }
})();