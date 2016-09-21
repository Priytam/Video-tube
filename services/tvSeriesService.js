(function () {
    'use strict';

    angular
        .module('tvSeriesApp')
        .factory('tvSeriesService', tvSeriesService);

    function tvSeriesService($http, $log) {
        var api_base = 'https://amagi.herokuapp.com/ui-test/api/v1/spots';
        var service = {
            getShowInfo:  getTvShowInfo
        };

        return service;

        //////////////////////////////////////

        function getTvShowInfo() {
            return $http.get(api_base)
                .then(processResponse)
                .catch(createErrorMessage('Failed to get Show Info'));
        }

        function processResponse(res) {
            $log.debug('tvSeriesService: Got response from API', res);
            _.each(res.data, function(show) {
                show.aired_date = show.aired_at.split('T')[0] ;
                show.aired_local_time =  show.aired_at.split('T')[1];
            });
            return res.data;
        }

        function createErrorMessage(msg) {
            return function processError(err) {
                $log.error('tvSeriesService: Error from API', err);
                alert(msg);
                return err;
            }
        }
    }
})();
