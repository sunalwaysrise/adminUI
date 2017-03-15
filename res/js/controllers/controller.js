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
    .controller('charts', function($scope, $http, $location,$timeout, toastr) {

        //demo

        $scope.labels0 = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series0 = ['Series A', 'Series B'];
        $scope.data0 = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.onClick = function (points, evt) {
            // console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        };


        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $timeout(function () {
            $scope.data = [
                [165, 159, 80, 81, 156, 55, 40],
                [28, 48, 140, 19, 86, 127, 90]
            ];
            $scope.data2 = [
                400, 300, 100, 60
            ];
            $scope.labels2 = ["北京", "上海", "杭州", "深圳"];
        },3000)

        $scope.labels2 = ["北京", "上海","杭州"];
        $scope.data2 = [300, 500, 100];

        $scope.labels3 =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
        $scope.options3={ colors : [ '#ff0000']};
        $scope.data3 = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

        $scope.colors4 = ['#45b7cd', '#ff6384', '#ff8e72'];
        $scope.labels4 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.data4 = [
            [65, -59, 80, 81, -56, 55, -40],
            [28, 48, -40, 19, 86, 27, 90]
        ];
        $scope.datasetOverride4 = [
            {
                label: "Bar chart",
                borderWidth: 1,
                type: 'bar'
            },
            {
                label: "Line chart",
                borderWidth: 3,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                type: 'line'
            }
        ];

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
