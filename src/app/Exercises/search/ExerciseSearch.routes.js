(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.ExerciseSearch', {
                url: '/ExerciseSearch',
                views: {
                    'menuContent': {
                        templateUrl: 'app/Exercises/search/ExerciseSearch.html',
                        controller: 'ExerciseSearchCtrl as vm'
                    }
                }
            });
    }
})();