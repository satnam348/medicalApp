(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.similarMedicines', {
                url: '/similarMedicines/:medicineId',
                views: {
                    'menuContent': {
                        templateUrl: 'app/views/similarMedicines/similarMedicines.html',
                        controller: 'similarMedicines as vm'
                    }
                }
            });
    }
})();