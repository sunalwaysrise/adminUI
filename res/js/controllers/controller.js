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
    .controller('index', function($scope, $http, $location, toastr) {
        $scope.accordion={
            oneAtATime:true,

            items: ['Item 1', 'Item 2', 'Item 3'],
            addItem:function() {
                var newItemNo = $scope.accordion.items.length + 1;
                $scope.accordion.items.push('Item ' + newItemNo);
            },
            status : {
                isCustomHeaderOpen: false,
                isFirstOpen: true,
                isFirstDisabled: false
            }
        };
        $scope.accordiongroups= [
            {
                title: '头部内容',
                content: '详情部分'
            },
            {
                title: '头部内容2',
                content: '详情部分2'
            }
        ];
        $scope.alerts=[
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];
        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.singleModel = 1;
        $scope.radioModel = 'Middle';
        $scope.checkModel = {
            A: false,
            B: true,
            C: false
        };
        $scope.checkResults = [];
        $scope.$watchCollection('checkModel', function () {
            $scope.checkResults = [];
            angular.forEach($scope.checkModel, function (value, key) {
                if (value) {
                    $scope.checkResults.push(key);
                }
            });
        });


        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();
        $scope.clear = function() {
            $scope.dt = null;
            $scope.dt2 = null;
        };
        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };
        $scope.dateOptions = {
            dateDisabled: disabled,//禁止选择周末
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),//最大日期
            minDate: new Date(),//最小日期
            startingDay: 1
        };
        // 禁止选择周末
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }
        $scope.toggleMin = function() {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };
        $scope.toggleMin();
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };
        $scope.formats = [ 'yyyy/MM/dd', 'dd-MMMM-yyyy','dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['M!/d!/yyyy'];
        $scope.popup1 = {
            opened: false
        };
        $scope.popup2 = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }




        $scope.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];
        $scope.status = {
            isopen: false
        };

        $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            console.log($event)
            $scope.status.isopen = !$scope.status.isopen;
        };


    })
    .controller('home', function($scope, $http, $location, toastr) {

    })
    .controller('widgets', function($scope, $http, $location, toastr) {
    })
    .controller('charts', function($scope, $http, $location, toastr) {
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
