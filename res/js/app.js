'use strict';
var adminUI = angular.module('adminUI', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'chart.js',
    'ui.bootstrap',
    'chart.js',
    'oc.lazyLoad',
    'toastr',
    'app.controllers',
    'app.services',
    'app.directives'
]);
adminUI
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/access/signin');
        $stateProvider
            .state('access', {
                url: '/access',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('access.signin', {
                url: '/signin',
                templateUrl: 'tpl/access/signin.html',
                controller: 'signin'
            })
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: "tpl/app.html"
            })
            .state('app.bootstrap', {
                url: '/bootstrap',
                templateUrl: 'tpl/bootstrap/index.html',
                controller: "bootstrap",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/bootstrap/bootstrap.js');
                    }]
                }
            }).state('app.bootstraptip', {
                url: '/bootstraptip',
                templateUrl: 'tpl/bootstrap/tip.html',
                controller: "bootstraptip",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/bootstrap/bootstraptip.js');
                    }]
                }
            }).state('app.bootstrapmodel', {
                url: '/bootstrapmodel',
                templateUrl: 'tpl/bootstrap/model.html',
                controller: "bootstrapmodel",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/bootstrap/bootstrapmodel.js');
                    }]
                }
            })
            .state('app.home', {
                url: '/home',
                templateUrl: 'tpl/index/home.html',
                controller: "home"
            })
            .state('app.widgets', {
                url: '/widgets',
                templateUrl: 'tpl/index/widgets.html',
                controller: "widgets"
            })
            .state('app.charts', {
                url: '/charts',
                templateUrl: 'tpl/index/charts.html',
                controller: "charts"
            })
            .state('app.form1', {
                url: '/form1',
                templateUrl: 'tpl/index/form1.html',
                controller: "form1"
            })
            .state('app.form2', {
                url: '/form2',
                templateUrl: 'tpl/index/form2.html',
                controller: "form2"
            })
            .state('app.form3', {
                url: '/form3',
                templateUrl: 'tpl/index/form3.html',
                controller: "form3"
            })
            .state('app.table1', {
                url: '/table1',
                templateUrl: 'tpl/index/table1.html',
                controller: "table1"
            })
            .state('app.table2', {
                url: '/table2',
                templateUrl: 'tpl/index/table2.html',
                controller: "table2"
            })
            .state('app.invoice', {
                url: '/invoice',
                templateUrl: 'tpl/index/invoice.html',
                controller: "invoice"
            })
            .state('app.grid', {
                url: '/grid',
                templateUrl: 'tpl/index/grid.html',
                controller: "grid"
            })
            .state('app.search', {
                url: '/search',
                templateUrl: 'tpl/index/search.html',
                controller: "search"
            });
    });
var app = {
        debug: true,
        screens: {
            'xs-max': 767,
            'sm-min': 768,
            'sm-max': 991,
            'md-min': 992,
            'md-max': 1199,
            'lg-min': 1200
        },
        getScreenSize: function() {
            var screenPx = window.innerWidth;
            if (screenPx <= app.screens['xs-max']) return 'xs';
            if ((screenPx >= app.screens['sm-min']) && (screenPx <= app.screens['sm-max'])) return 'sm';
            if ((screenPx >= app.screens['md-min']) && (screenPx <= app.screens['md-max'])) return 'md';
            if (screenPx >= app.screens['lg-min']) return 'lg';
        }
    },
    E = {
        toggle_navigation_state: function(argument) {
            if ($('body').hasClass('nav-collapsed')) {
                this.nav_static();
            } else {
                this.nav_collapsed();
            }
        },
        nav_collapsed: function(argument) {
            $('.hascollapsed').addClass('collapsed');
            $('ul.collapse').removeClass('in');
            $('body').addClass('nav-collapsed').removeClass('nav-static');
        },
        nav_static: function(argument) {
            $('body').removeClass('nav-collapsed').addClass('nav-static');
        }
    };
