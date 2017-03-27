/**
 * Created by wenbin.lu on 2017/3/27.
 */
'use strict';
angular.module('app.controllers', []).controller('form1', function($scope, $http, $location,toastr) {
    Pace.restart();

    $scope.mu1=[
        'Action1',
        'Action2',
        'Action3'
    ]

});