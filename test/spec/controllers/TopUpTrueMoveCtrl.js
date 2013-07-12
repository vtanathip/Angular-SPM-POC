'use strict';

describe('Controller: TopUpTrueMoveCtrl', function () {

    // load the controller's module
    beforeEach(module('angularSPMApp'));

    var TopUpTrueMoveCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TopUpTrueMoveCtrl = $controller('TopUpTrueMoveCtrl', {
            $scope: scope
        });
    }));

    it('should have mobileno array and length must 0', function () {
        //mobileno array should exiting
        expect(scope.mobileno).toEqual([]);
        //mobileno just init must equal 0
        expect(scope.mobileno.length).toBe(0);
    });

});