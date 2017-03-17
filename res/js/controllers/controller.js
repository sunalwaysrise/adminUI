'use strict';
var appControllers = angular.module('app.controllers', []);
appControllers
    .controller('signin', function($scope, $http, $location, toastr) {
        $scope.user = {};
        $scope.signIn = function() {
            if (!$scope.user.username || !$scope.user.password) {
                return toastr.error('用户名、密码均不能为空', '错误');
            }
            function callback(r) {
                if (r.flag == 1) {
                    $("div.container").fadeOut("slow");
                    $location.path('/app/home');
                } else {
                    return toastr.error(r.msg, '登录失败');
                }
            }
            if (app.debug) {
                if ($scope.user.username != 'admin') {
                    return toastr.error('用户名不存在', '错误');
                } else if ($scope.user.password != 'admin') {
                    return toastr.error('密码错误', '错误');
                } else {
                    callback({ 'flag': 1 });
                }
            } else {
                $http.get(CONFIG.DATA + 'access/signin', {
                    params: $scope.user
                }).success(function(r) {
                    callback(f);
                });
            }

        };
    })

    .controller('home', function($scope, $http, $location, toastr) {

    })
    .controller('widgets', function($scope, $http, $location, toastr) {
    })

    .controller('form1', function($scope, $http, $location, toastr) {
    })
    .controller('form2', function($scope, $http, $location, toastr) {
    })
    .controller('form3', function($scope, $http, $location, toastr) {
    })
    .controller('table1', function($scope, $http, $location, toastr) {
    })
    .controller('table2', function($scope, $http, $location, toastr) {
    })
    .controller('invoice', function($scope, $http, $location, toastr) {
    })
    .controller('grid', function($scope, $http, $location, toastr) {
    })
    .controller('search', function($scope, $http, $location, toastr) {
        
    })

;
