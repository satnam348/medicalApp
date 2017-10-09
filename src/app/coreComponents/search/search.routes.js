(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'app/coreComponents/search/search.html',
                        controller: 'searchCtrl as vm'
                    }
                }
            });
    }
})();