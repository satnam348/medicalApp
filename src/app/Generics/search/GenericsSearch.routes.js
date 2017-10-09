(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.GenericsSearch', {
                url: '/GenericsSearch',
                views: {
                    'menuContent': {
                        templateUrl: 'app/Generics/search/GenericsSearch.html',
                        controller: 'GenericsSearchCtrl as vm'
                    }
                }
            });
    }
})();