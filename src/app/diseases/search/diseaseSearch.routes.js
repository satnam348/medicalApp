(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.diseaseSearch', {
                url: '/diseaseSearch',
                views: {
                    'menuContent': {
                        templateUrl: 'app/diseases/search/diseaseSearch.html',
                        controller: 'diseaseSearchCtrl as vm'
                    }
                }
            });
    }
})();