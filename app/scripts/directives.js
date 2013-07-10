'use strict';

var app = angular.module('angularSPMApp');

app.directive('numpad',function(){
    return {
        restrict: "E",
        template: "<div class='keypad-wrapper span5 keypad-wrapper-bg'>"
                    + "<div class='keypad keypad-bg'>"
                        + "<div class='numpad'>"
                            + "<ul>"
                                + "<li><span class='span1 number-btn'>1</span></li>"
                                + "<li><span class='span1 number-btn'>2</span></li>"
                                + "<li><span class='span1 number-btn'>3</span></li>"
                                + "<li><span class='span1 number-btn'>4</span></li>"
                                + "<li><span class='span1 number-btn'>5</span></li>"
                                + "<li><span class='span1 number-btn'>6</span></li>"
                                + "<li><span class='span1 number-btn'>7</span></li>"
                                + "<li><span class='span1 number-btn'>8</span></li>"
                                + "<li><span class='span1 number-btn'>9</span></li>"
                                + "<li><span class='span1 number-btn'>ลบ</span></li>"
                                + "<li><span class='span1 number-btn'>.</span></li>"
                                + "<li><span class='span1 number-btn'>#</span></li>"
                            + "</ul>"
                        + "</div>"
                    + "</div>"
                + "</div>"
    }
});