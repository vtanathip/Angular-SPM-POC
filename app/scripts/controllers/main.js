'use strict';

angular.module('angularSPMApp')
      .controller('MainCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpTrueMoveCtrl', function ($scope, keypad, $location) {
        $scope.mobileno = [];
        $scope.activeKeypad = function(number){
            if(number == -1){
                keypad.remove($scope);
            }else if( $scope.mobileno.length < 12 ){
                keypad.add($scope,number);
                keypad.formatMobile($scope);
            }
        }
        $scope.submitForm = function(){
            if(typeof $scope.mobileTextView == "undefined" || $scope.mobileTextView.length < 12){
                $scope.error = "Not enough number";
            }else{
                //should $http to tomcat server in this step the route to result
                var forwardPath = $location.$$url;
                var routeTo = forwardPath.replace("/truemove","/result");
                $scope.error = "";
                $location.path(routeTo);
            }
        }
    });

angular.module('angularSPMApp')
    .controller('TopUpResultCtrl', function ($scope) {
        console.log("i m in result controller");
    });

angular.module('angularSPMApp')
    .controller('BackCtrl', function ($scope, $location) {
        var backPath = $location.$$url;
        var routeTo =backPath.replace("/back","");
        $location.path(routeTo);
    });
