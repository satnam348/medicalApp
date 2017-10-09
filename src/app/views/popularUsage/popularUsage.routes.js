(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.popularUsage', {
                url: '/popularUsage/:medicineId',
                views: {
                    'menuContent': {
                        templateUrl: 'app/views/popularUsage/popularUsage.html',
                        controller: 'popularUsage as vm'
                    }
                }
            });
    }
})();