'use strict';

angular.module('App', [
        'ui.router',
        'ngAnimate'
    ])

.config(['$stateProvider', '$urlRouterProvider', '$provide', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('main', {
          url: '/',
          templateUrl: '',
          controller: 'MainCtrl'
        })
}])

.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.name = 'Arturo';
}])
