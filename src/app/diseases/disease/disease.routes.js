(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.diseases', {
                url: '/diseases',
                views: {
                    'menuContent': {
                        templateUrl: 'app/diseases/disease/disease.html',
                        controller: 'diseaseCtrl as vm'
                    }
                }
            });
    }
})();