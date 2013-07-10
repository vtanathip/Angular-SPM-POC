'use strict';

angular.module('angularSPMApp')
      .controller('MainCtrl', function ($scope) {

    });

angular.module('angularSPMApp')
    .controller('TopUpCtrl', function ($scope, $rootScope, $http) {

    });

angular.module('angularSPMApp')
    .controller('TopUpTrueMoveCtrl', function ($scope, $rootScope, $http) {

    });

angular.module('angularSPMApp')
    .controller('TopUpResultCtrl', function ($scope, $rootScope, $http) {

    });

angular.module('angularSPMApp')
    .controller('BackCtrl', function ($scope, $rootScope, $http, $location) {
        var backPath = $location.$$url;
        var routeTo =backPath.replace("/back","");
        $location.path(routeTo);
    });
