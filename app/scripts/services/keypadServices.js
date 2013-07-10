angular.
    module('angularSPMApp').
    factory('keypad', function(){
        return {
            add : function($scope,number){
                return $scope.mobileno.push(number);
            },
            remove : function($scope){
                var mobileNoArray = $scope.mobileno;
                $scope.mobileno.pop();
                if(mobileNoArray.length == 4){
                    $scope.mobileno.pop();
                }else if(mobileNoArray.length == 8){
                    $scope.mobileno.pop();
                }
                $scope.mobileTextView = $scope.mobileno.join("");
                return $scope.mobileno;
            },
            formatMobile : function($scope){
                var mobileNoArray = $scope.mobileno;
                if(mobileNoArray.length > 3){
                    for (var i = 0; i < mobileNoArray.length; i++){
                        if(i == 3 && mobileNoArray[3] !== "-"){
                            mobileNoArray.splice(i,0,"-");
                        }else if(i == 7 && mobileNoArray[7] !== "-"){
                            mobileNoArray.splice(i,0,"-");
                        }
                    }
                    $scope.mobileno = mobileNoArray;
                    $scope.mobileTextView = mobileNoArray.join("");
                    return  $scope.mobileno;
                }
                $scope.mobileTextView = mobileNoArray.join("");
                return $scope.mobileno;
            }
        }
    });
