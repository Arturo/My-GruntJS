'use strict';

describe('App.MainCtrl', function () {
    var scope;

    beforeEach(angular.mock.module('App'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('MainCtrl', { $scope: scope });
    }));

    it('should set new value for $scope.name', function () {
        expect(scope.name).toBe('Arturo');
    });
});