'use strict';

angular.module('angularSPMApp')
      .controller('MainCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpTrueMoveCtrl', function ($scope, keypad) {
        $scope.mobileno = [];
        $scope.activeKeypad = function(number){
            if(number == -1){
                keypad.remove($scope);
            }else if( $scope.mobileno.length < 12 ){
                keypad.add($scope,number);
                keypad.formatMobile($scope);
            }
        }
    });

angular.module('angularSPMApp')
    .controller('TopUpResultCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('BackCtrl', function ($scope, $location) {
        var backPath = $location.$$url;
        var routeTo =backPath.replace("/back","");
        $location.path(routeTo);
    });
