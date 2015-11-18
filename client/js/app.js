
(function () {
    'use strict';

    /*global angular */
    angular
        .module('NgDatesApp', [
            'DataService',
            'MainCtrl'
        ])
        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        });
}());