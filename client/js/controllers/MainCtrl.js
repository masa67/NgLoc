
(function () {
    'use strict';

    /*global angular */
    angular
        .module('MainCtrl', [])
        .controller('MainController', ['$scope', 'dataHandler', '$location', function ($scope, dataHandler, $location) {

            $scope.name = 'superhero';

            $location.search('lang', null).replace();
        }]);
}());