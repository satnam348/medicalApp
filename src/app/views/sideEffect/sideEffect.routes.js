(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.sideEffect', {
                url: '/sideEffect/:medicineId',
                views: {
                    'menuContent': {
                        templateUrl: 'app/views/sideEffect/sideEffect.html',
                        controller: 'sideEffectController as vm'
                    }
                }
            });
    }
})();