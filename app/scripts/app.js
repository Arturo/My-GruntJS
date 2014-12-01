'use strict';

angular.module('App', [
        'ui.router',
        'ngAnimate'
    ])

.config(['$stateProvider', '$urlRouterProvider', '$provide', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '',
          controller: 'LoginCtrl'
        })
}])
