describe('Keypad Services : ', function(){

    // load the controller's module
    beforeEach(module('angularSPMApp'));

    var serviceKeypad,
        scope,
        TopUpTrueMoveCtrl;
    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller,$rootScope,$injector) {
        scope = $rootScope.$new();
        TopUpTrueMoveCtrl = $controller('TopUpTrueMoveCtrl', {
            $scope: scope
        });
        serviceKeypad = $injector.get('keypad');
    }));

    it('keypad services shouldn\'t null',function(){
        expect(serviceKeypad).not.toBeNull();
    });

    it('keypad should add number when called',function(){
        scope.mobileno = [];
        //add mobile number to array
        expect(serviceKeypad.add(scope,1)).not.toBeNull();
        //mobile array should equal 1
        expect(scope.mobileno.length).toBe(1);
    });

    it('keypad should remove number in array when call remove',function(){
        scope.mobileno = [];
        //add mobile number to array
        expect(serviceKeypad.add(scope,1)).not.toBeNull();
        //mobile array now should be 1
        expect(scope.mobileno.length).toBe(1);
        //remove mobile in array
        expect(serviceKeypad.remove(scope)).not.toBeNull();
        //mobile array now should be 1
        expect(scope.mobileno.length).toBe(0);
    });

    it('keypad should format number',function(){
        scope.mobileno = ['0','8','6','8','1','8','5','0','5','5'];
        //add mobile number to array
        expect(serviceKeypad.formatMobile(scope)).not.toBeNull();
        //mobile array now should be 12
        expect(scope.mobileno.length).toBe(12);
    });

});