(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.labSearch', {
                url: '/labSearch',
                views: {
                    'menuContent': {
                        templateUrl: 'app/labTest/search/labSearch.html',
                        controller: 'labSearchCtrl as vm'
                    }
                }
            });
    }
})();