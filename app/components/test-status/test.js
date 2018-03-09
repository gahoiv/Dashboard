
function TestStatusCtrl($scope, DataProvider) {

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
            stacked: false,
            xAxis: {
                axisLabel: 'Test Case Id',
                axisLabelDistance: 30,
                showMaxMin: false
            },
            yAxis: {
                axisLabel: 'Test case Duration',
                tickFormat: function (d) {
                    return new Date(d * 1000).toISOString().substr(11, 8);
                }
            }
        }
    };

    DataProvider.getLongDurationPerSession().then(function (response) {
        $scope.data = convertChartData(response.data);
    });

    function convertChartData(testData) {
        return [{
                key: 'Test Case Id',
                values: getAxisData(testData, 'AverageRunTime')
            }
        ];
    }

    function getAxisData(testData, key) {
        return testData.map(function (test) {
            return {
                x: test['Test case name'],
                y: test[key]
            };
        });
    }
}

angular.module('myApp.dashboard').component('test', {
    templateUrl: 'components/test-status/test.html',
    controller: TestStatusCtrl
});