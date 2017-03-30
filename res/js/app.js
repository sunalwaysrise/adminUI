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
    'ui.grid',
    'ui.grid.selection',
    'ui.grid.pagination',
    'chart.js',
    'ui.bootstrap',
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
            }).state('app.bootstrapmodal', {
                url: '/bootstrapmodal',
                templateUrl: 'tpl/bootstrap/modal.html',
                controller: "bootstrapmodal",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/bootstrap/modal.js');
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
                templateUrl: 'tpl/widgets/index.html',
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/widgets/widgets.js');
                    }]
                }
            })
            .state('app.charts', {
                url: '/charts',
                templateUrl: 'tpl/charts/charts.html',
                controller: "charts",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/charts/charts.js');
                    }]
                }
            })
            .state('app.form1', {
                url: '/form1',
                templateUrl: 'tpl/form/form1.html',
                controller: "form1",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/form/form1.js');
                    }]
                }
            })
            .state('app.form2', {
                url: '/form2',
                templateUrl: 'tpl/form/form2.html',
                controller: "form2",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/form/form2.js');
                    }]
                }
            })
            .state('app.form3', {
                url: '/form3',
                templateUrl: 'tpl/form/form3.html',
                controller: "form3",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/form/form3.js');
                    }]
                }
            })

            .state('app.table1', {
                url: '/table1',
                templateUrl: 'tpl/table/table1.html',
                controller: "table1",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/table/table.js');
                    }]
                }
            })
            .state('app.table2', {
                url: '/table2',
                templateUrl: 'tpl/table/table2.html',
                controller: "table2",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/table/table.js');
                    }]
                }
            })
            .state('app.icons', {
                url: '/ui/icons',
                templateUrl: 'tpl/ui/icons.html',
                controller: "ui",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/ui/ui.js');
                    }]
                }
            })
            .state('app.buttons', {
                url: '/ui/buttons',
                templateUrl: 'tpl/ui/buttons.html',
                controller: "ui",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/ui/ui.js');
                    }]
                }
            })
            .state('app.invoice', {
                url: '/invoice',
                templateUrl: 'tpl/other/invoice.html',
                controller: "invoice",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/other/other.js');
                    }]
                }
            })
            .state('app.grid', {
                url: '/grid',
                templateUrl: 'tpl/other/grid.html',
                controller: "grid",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/other/other.js');
                    }]
                }
            })
            .state('app.timeline', {
                url: '/timeline',
                templateUrl: 'tpl/other/timeline.html',
                controller: "timeline",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/other/other.js');
                    }]
                }
            })
            .state('app.calendar', {
                url: '/calendar',
                templateUrl: 'tpl/other/calendar.html',
                controller: "calendar",
                resolve:{
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('res/js/controllers/other/other.js');
                    }]
                }
            });
    });
var app = {
        settings:{
            colors:{"white":"#fff","black":"#000","gray-light":"#999","gray-lighter":"#eee","gray":"#666","gray-dark":"#343434","gray-darker":"#222","gray-semi-light":"#777","gray-semi-lighter":"#ddd","brand-primary":"#5d8fc2","brand-success":"#64bd63","brand-warning":"#f0b518","brand-danger":"#dd5826","brand-info":"#5dc4bf"}
        },
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
