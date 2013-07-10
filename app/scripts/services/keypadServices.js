angular.
    module('angularSPMApp').
    factory('keypad', function(){
        return {
            numberBuilder : function(number){
                return number;
            }
        }
    });