
function BuildStatusCtrl($scope, DataProvider) {

    $scope.options = {
        chart: {
            type: 'multiBarChart',
            height: 400,
            margin: {
                top: 20,
                right: 20,
                bottom: 45,
                left: 45
            },
            clipEdge: true,
            //staggerLabels: true,
            duration: 500,
            color: ['#6EBA8C', '#005562', '#0E8174'],
            stacked: true,
            xAxis: {
                axisLabel: 'Feature Names',
                axisLabelDistance: 30,
                showMaxMin: false
            },
            yAxis: {
                axisLabel: 'Test case count',
                axisLabelDistance: -20,
                tickFormat: function (d) {
                    return d3.format(',')(d);
                }
            }
        }
    };

    DataProvider.getLatestBuildInfo().then(function (response) {
        $scope.data = convertChartData(response.data);
    });

    function convertChartData(buildData) {
        return [{
                key: 'Test Passed',
                values: getAxisData(buildData, 'Total_Pass')
            },
            {
                key: 'Test Failed',
                values: getAxisData(buildData, 'Total_Fail')
            },
            {
                key: 'Test Skipped',
                values: getAxisData(buildData, 'Total_Skip')
            }
        ];
    }

    function getAxisData(buildData, key) {
        return buildData.map(function (build) {
            return {
                x: build['SessionId'],
                y: build[key]
            };
        });
    }
}

angular.module('myApp.dashboard').component('build', {
    templateUrl: 'components/build-status/build.html',
    controller: BuildStatusCtrl
});