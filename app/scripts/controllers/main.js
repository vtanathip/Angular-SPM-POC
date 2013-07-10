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
            console.log("key pad press " + number);
            keypad.numberBuilder($scope,number);
            console.log("data in array " + $scope.mobileno);
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
