'use strict';
var appDirectives = angular.module('app.directives', []);
appDirectives.directive('body', function($window) {
return {
    restrict: 'E',
    link: function(scope, $element) {
        var s = app.getScreenSize();
        if (s == 'sm' || s == 'xs') {
            E.nav_collapsed();
        }
        angular.element($window).bind('resize', function() {
            var s = app.getScreenSize();
            if (s == 'sm' || s == 'xs') {
                E.nav_collapsed();
            }
        });
        angular.element('a').bind('click', function(e) {
            e.preventDefault();
        })
    }

}
}).directive('navigation', function($rootScope,$window) {
    return {
        restrict: "EA",
        link: function(scope, $el) {
            $rootScope.$on('$stateChangeSuccess', function(){
                E.nav_static();
                var s = app.getScreenSize();
                if (s == 'sm' || s == 'xs') {
                    E.nav_collapsed();
                }
                window.scrollTo(0, 0);
            });
            $el.on('mouseenter', function() {
                E.nav_static();
            });
            function initSidebarScroll() {
                var $sidebarContent = $el.find('.js-sidebar-content');
                if ($el.find('.slimScrollDiv').length != 0) {
                    $sidebarContent.slimscroll({
                        destroy: true
                    })
                }
                $sidebarContent.slimscroll({
                    height: window.innerHeight,
                    size: '4px'
                });
            }
            angular.element($window).bind('resize', initSidebarScroll);
            initSidebarScroll();
        }
    }
})


;
