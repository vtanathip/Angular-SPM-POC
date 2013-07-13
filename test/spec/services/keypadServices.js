describe('Keypad Services : ', function(){

    // load the controller's module
    beforeEach(module('angularSPMApp'));

    var serviceKeypad;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($injector) {
        serviceKeypad = $injector.get('keypad');
    }));

    it('keypad services shouldn\'t null',function(){
        expect(serviceKeypad).not.toBeNull();
    });


});