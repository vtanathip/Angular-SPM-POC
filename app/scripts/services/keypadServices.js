angular.
    module('angularSPMApp').
    factory('keypad', function(){
        return {
            numberBuilder : function($scope,number){
                return $scope.mobileno.push(number);
            }
        }
    });