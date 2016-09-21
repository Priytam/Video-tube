(function () {
    'use strict';

    angular
        .module('tvSeriesApp')
        .directive('showDetail', showDetail);

    function showDetail() {
        var directive = {
            scope: {
                show: '='
            },
            restrict: 'E',
            templateUrl : 'templates/showDetail.html'
        };
        return directive;

    }
})();