(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.feature3', {
                url: '/feature3',
                views: {
                    'menuContent': {
                        templateUrl: 'app/view-feature3/feature3.html',
                        controller: 'Feature3Controller as vm'
                    }
                }
            });
    }
})();