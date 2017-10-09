(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider

            .state('tab.Generics', {
                url: '/Generics',
                views: {
                    'menuContent': {
                        templateUrl: 'app/Generics/generic/Generics.html',
                        controller: 'GenericsCtrl as vm'
                    }
                }
            });
    }
})();