/**
 * Created by Administrator on 2017/3/15.
 */
'use strict';
angular.module('app.controllers', []).controller('charts', function($scope, $http, $location,$timeout,scriptLoader, toastr) {

    //demo
    // 'chart.js'
    // $scope.loadBootstrap = function(){
    //     $ocLazyLoad.load([
    //         'bower_components/chart.js/dist/Chart.min.js',
    //         'bower_components/angular-chart.js/dist/angular-chart.min.js'
    //     ])
    // }
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




    // $scope.data1 = [
    //     [1, 20],
    //     [2, 20],
    //     [3, 40],
    //     [4, 30],
    //     [5, 40],
    //     [6, 35],
    //     [7, 47]
    // ];
    // $scope.data2 = [
    //     [1, 13],
    //     [2, 8],
    //     [3, 17],
    //     [4, 10],
    //     [5, 17],
    //     [6, 15],
    //     [7, 16]
    // ];
    // $scope.data3 = [
    //     [1, 23],
    //     [2, 13],
    //     [3, 33],
    //     [4, 16],
    //     [5, 32],
    //     [6, 28],
    //     [7, 31]
    // ];
    //
    // $scope.applyRickshawData = function(){
    //     $scope.seriesData = [ [], [] ];
    //     $scope.random = new Rickshaw.Fixtures.RandomData(30);
    //
    //     for (var i = 0; i < 30; i++) {
    //         $scope.random.addData($scope.seriesData);
    //     }
    //     $scope.series = [
    //         {
    //             color: '#96E593',
    //             data: $scope.seriesData[0],
    //             name: 'Uploads'
    //         }, {
    //             color: '#ecfaec',
    //             data: $scope.seriesData[1],
    //             name: 'Downloads'
    //         }
    //     ];
    // };
    // scriptLoader.loadScripts([
    //     'res/vendor/d3/d3.min.js',
    //     'res/vendor/rickshaw/rickshaw.min.js'
    // ])
    //     .then(function(){
    //         $scope.applyRickshawData()
    //     });

});