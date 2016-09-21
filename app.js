(function (angular) {
    'use strict';

    //// JavaScript Code ////
    function configRoutes($routeProvider) {
        console.log('config: $routeProvider configed');
        $routeProvider.when('/',{
            templateUrl: 'templates/showInfo.html',
            controller : 'ShowInfo',
            resolve: {
                showInfo : getShowInfo
            }
        });
    }

    function getShowInfo($log, tvSeriesService) {
        $log.debug('Resolve: getShowInfo called');
        return tvSeriesService.getShowInfo();
    }

    //// Angular Code ////
    angular.module('tvSeriesApp', ['ngRoute', 'angular-loading-bar', 'ngAnimate', 'ui.bootstrap'])
        .config(configRoutes)
        .constant('_',
            window._
        );

})(angular);
