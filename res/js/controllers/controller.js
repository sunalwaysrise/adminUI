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
            var now = new Date(),
            month = now.getMonth() + 1,
            year = now.getFullYear();


            $scope.calendar_event=[
                [
                    '2/'+month+'/'+year,
                    '待办事项',
                    '#',
                    app.settings.colors['brand-primary'],
                    '出差报销'
                ],
                [
                    '5/'+month+'/'+year,
                    '紧急任务',
                    '#',
                    app.settings.colors['brand-warning'],
                    '处理系统提交的BUG'
                ],
                [
                    '18/'+month+'/'+year,
                    '日程安排',
                    '#',
                    app.settings.colors['brand-success'],
                    '出差'
                ],
                [
                    '29/'+month+'/'+year,
                    '链接',
                    'https://www.wenbin.lu',
                    app.settings.colors['brand-danger']
                ]
            ];
    })

    .controller('invoice', function($scope, $http, $location, toastr) {
    })
    .controller('grid', function($scope, $http, $location, toastr) {
    })
    .controller('search', function($scope, $http, $location, toastr) {
        
    })

;
