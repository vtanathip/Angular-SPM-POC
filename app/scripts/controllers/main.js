'use strict';

angular.module('angularSPMApp')
      .controller('MainCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpTrueMoveCtrl', function ($scope, keypad) {
        $scope.activeKeypad = function(number){
            console.log("key pad press " + number);
            $scope.mobilephone = keypad.numberBuilder(number);
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
