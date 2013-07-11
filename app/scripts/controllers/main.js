'use strict';

angular.module('angularSPMApp')
      .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = ["a","b","c"];
    });

angular.module('angularSPMApp')
    .controller('TopUpCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpTrueMoveCtrl', function ($scope, keypad, $location, $rootScope) {
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
                $scope.error = "Wrong format mobile.";
            }else if( $scope.mobileTextView.match(/0[8-9]\d{1}-\d{3}-\d{4}/) ){

                //should $http to tomcat server
                //do somethings
                //if ok routes to result ,if not show error.
                if($scope.mobileTextView == "086-818-5055"){
                    $rootScope.resultData = {mobileno : $scope.mobileTextView , textColor : "text-info" , result : "สําเร็จ"};
                }else{
                    $rootScope.resultData = {mobileno : $scope.mobileTextView , textColor : "text-error" , result : "ไม่สําเร็จ"};
                }

                var forwardPath = $location.$$url;
                var routeTo = forwardPath.replace("/truemove","/result");
                $scope.error = "";
                $location.path(routeTo);
            }else{
                $scope.error = "Wrong format mobile.";
            }
        }
    });

angular.module('angularSPMApp')
    .controller('TopUpResultCtrl', function ($scope, $rootScope) {
        console.log("i m in result controller");
        console.log($rootScope.resultData);


    });

angular.module('angularSPMApp')
    .controller('BackCtrl', function ($scope, $location) {
        var backPath = $location.$$url;
        var routeTo =backPath.replace("/back","");
        $location.path(routeTo);
    });
