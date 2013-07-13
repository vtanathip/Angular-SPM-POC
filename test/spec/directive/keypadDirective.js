'use strict';

describe('Directive: keypad', function() {

    beforeEach(module('angularSPMApp'));

    var element, scope;

    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<numpad></numpad>');
        scope = $rootScope;
        $compile(element)(scope);
        scope.$digest();
    }));

    it("should compile to keypad", function() {
        expect(element.html()).toContain("keypad-wrapper");
    });

});