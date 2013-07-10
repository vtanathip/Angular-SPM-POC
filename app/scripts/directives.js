'use strict';

var app = angular.module('angularSPMApp');

app.directive('numpad',function(){
    return {
        restrict: "E",
        template: "<div class='keypad-wrapper span5 keypad-wrapper-bg'>"
                    + "<div class='keypad keypad-bg'>"
                        + "<div class='numpad'>"
                            + "<ul>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(1)'>1</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(2)'>2</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(3)'>3</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(4)'>4</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(5)'>5</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(6)'>6</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(7)'>7</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(8)'>8</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(9)'>9</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(-1)'>ลบ</span></li>"
                                + "<li><span class='span1 number-btn' ng-click='activeKeypad(0)'>0</span></li>"
                            + "</ul>"
                        + "</div>"
                    + "</div>"
                + "</div>"
    }
});