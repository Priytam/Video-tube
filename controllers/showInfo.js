(function () {
    'use strict';

    angular
        .module('tvSeriesApp')
        .controller('ShowInfo', ShowInfoCtrl, _);

    function ShowInfoCtrl($scope, $log, showInfo) {
        $log.debug('ShowInfoCtrl: created for show ');
        $scope.search =  '';

        processActualData(showInfo);


        $scope.process =  function() {
            if($scope.search === '') {
                return ;
            }
            var filtered_list = _.filter(showInfo, function(show){
                return (show.aired_date.toLowerCase() === $scope.search.toLowerCase() ||
                    show.aired_at.toLowerCase() === $scope.search.toLowerCase() ||
                    show.aired_local_time.toLowerCase() === $scope.search.toLowerCase() ||
                    show.brand_name.toLowerCase() === $scope.search.toLowerCase() ||
                    show.campaign_name.toLowerCase() === $scope.search.toLowerCase() ||
                    show.client_name.toLowerCase() === $scope.search.toLowerCase() ||
                    show.city_name.toLowerCase() === $scope.search.toLowerCase() ||
                    show.channel_name.toLowerCase() === $scope.search.toLowerCase())
            });
            processActualData(filtered_list);
        };


        function processActualData(info) {
            var tempShowInfo = _.groupBy(info, 'aired_date');
            var orderedShow = {};
            Object.keys(tempShowInfo).sort().reverse().forEach(function(key) {
                orderedShow[key] = tempShowInfo[key];
            });
            $scope.showInfo = orderedShow;
        }

        $log.debug('ShowInfoCtrl: showInfo', showInfo);
    }
})();
