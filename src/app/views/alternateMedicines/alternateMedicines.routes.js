(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.alternateMedicines', {
                url: '/alternateMedicines/:medicineId',
                views: {
                    'menuContent': {
                        templateUrl: 'app/views/alternateMedicines/alternateMedicines.html',
                        controller: 'alternateMedicines as vm'
                    }
                }
            });
    }
})();