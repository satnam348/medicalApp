(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.medicineInteractions', {
                url: '/medicineInteractions/:medicineId',
                views: {
                    'menuContent': {
                        templateUrl: 'app/views/medicineInteractions/medicineInteractions.html',
                        controller: 'medicineInteractionsController as vm'
                    }
                }
            });
    }
})();