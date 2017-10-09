(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.labTest', {
                url: '/labTest',
                views: {
                    'menuContent': {
                        templateUrl: 'app/labTest/tests/labTest.html',
                        controller: 'labTestCtrl as vm'
                    }
                }
            });
    }
})();