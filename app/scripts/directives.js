'use strict';

var app = angular.module('angularSPMApp');

app.directive('numpad',function(){
    return {
        restrict: "E",
        template: "<div class='keypad-wrapper span5 keypad-wrapper-bg'>"
                    + "<div class='keypad keypad-bg'>"
                        + "<div class='numpad'>"
                            + "<ul>"
                                + "<li><span class='span1 number-btn' vt-click='1'>1</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='2'>2</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='3'>3</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='4'>4</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='5'>5</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='6'>6</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='7'>7</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='8'>8</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='9'>9</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='-1'>ลบ</span></li>"
                                + "<li><span class='span1 number-btn' vt-click='0'>0</span></li>"
                            + "</ul>"
                        + "</div>"
                    + "</div>"
                + "</div>",
        link: function (scope){
            scope.mobileno = [];
        }
    }
});

app.directive('vtClick',function(keypad){
    return {
        restrict: "A",
        link: function (scope, element, attrs){
            element.bind("click", function () {
                var number = attrs.vtClick;
                if(number == -1){
                    keypad.remove(scope);
                }else if( scope.mobileno.length < 12 ){
                    keypad.add(scope,number);
                    keypad.formatMobile(scope);
                }
                scope.$apply();
            });
        }
    }
});